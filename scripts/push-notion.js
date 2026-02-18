import { Client } from "@notionhq/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(PROJECT_ROOT, "docs");

// Инициализация Notion клиента
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

/**
 * Находит страницу по названию в папке
 */
async function findPageByTitle(parentId, title) {
  try {
    const response = await notion.blocks.children.list({
      block_id: parentId,
    });

    for (const block of response.results) {
      if (block.type === "child_page" && block.child_page.title === title) {
        return block.id;
      }
    }
    return null;
  } catch (error) {
    console.error(`❌ Ошибка при поиске страницы "${title}":`, error.message);
    return null;
  }
}

/**
 * Находит или создает папку "Project Docs" в "Yes Studio"
 */
async function ensureProjectDocsFolder(yesStudioId) {
  const folderName = "Project Docs";
  let folderId = await findPageByTitle(yesStudioId, folderName);

  if (folderId) {
    console.log(`✅ Найдена папка "${folderName}"`);
    return folderId;
  }

  // Создаём новую папку
  try {
    const response = await notion.pages.create({
      parent: { page_id: yesStudioId },
      title: folderName,
    });
    console.log(`✨ Создана новая папка "${folderName}"`);
    return response.id;
  } catch (error) {
    console.error(`❌ Ошибка при создании папки:`, error.message);
    return null;
  }
}

/**
 * Читает файл и извлекает текст/контент
 */
function readFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`❌ Ошибка при чтении файла ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Преобразует текст в блоки для Notion
 */
function textToNotionBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    // Заголовки
    if (line.startsWith("# ")) {
      blocks.push({
        object: "block",
        type: "heading_1",
        heading_1: {
          rich_text: [{ type: "text", text: { content: line.slice(2) } }],
        },
      });
    } else if (line.startsWith("## ")) {
      blocks.push({
        object: "block",
        type: "heading_2",
        heading_2: {
          rich_text: [{ type: "text", text: { content: line.slice(3) } }],
        },
      });
    } else if (line.startsWith("### ")) {
      blocks.push({
        object: "block",
        type: "heading_3",
        heading_3: {
          rich_text: [{ type: "text", text: { content: line.slice(4) } }],
        },
      });
    } else if (line.startsWith("- ")) {
      // Bulleted list
      blocks.push({
        object: "block",
        type: "bulleted_list_item",
        bulleted_list_item: {
          rich_text: [{ type: "text", text: { content: line.slice(2) } }],
        },
      });
    } else {
      // Обычный параграф
      blocks.push({
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [{ type: "text", text: { content: line } }],
        },
      });
    }
  }

  return blocks;
}

/**
 * Создает или обновляет страницу в Notion
 */
async function uploadDocFile(parentId, filePath, fileName) {
  try {
    const pageTitle = path.basename(fileName, path.extname(fileName));
    const content = readFileContent(filePath);

    if (!content) return false;

    // Проверяем существует ли уже такая страница
    let pageId = await findPageByTitle(parentId, pageTitle);

    if (!pageId) {
      // Создаём новую страницу
      const response = await notion.pages.create({
        parent: { page_id: parentId },
        title: pageTitle,
      });
      pageId = response.id;
      console.log(`📄 Создана новая страница: ${pageTitle}`);
    } else {
      console.log(`♻️  Обновляется страница: ${pageTitle}`);
    }

    // Преобразуем текст в блоки
    const blocks = textToNotionBlocks(content);

    // Очищаем старые блоки (если страница уже существовала)
    const existingBlocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    for (const block of existingBlocks.results) {
      try {
        await notion.blocks.delete({ block_id: block.id });
      } catch (e) {
        // Некоторые блоки нельзя удалять (например, заголовок страницы)
      }
    }

    // Добавляем новые блоки
    if (blocks.length > 0) {
      await notion.blocks.children.append({
        block_id: pageId,
        children: blocks.slice(0, 100), // Notion API ограничивает 100 блоков за раз
      });

      // Если блоков больше 100, добавляем остальные
      for (let i = 100; i < blocks.length; i += 100) {
        await notion.blocks.children.append({
          block_id: pageId,
          children: blocks.slice(i, i + 100),
        });
      }
    }

    console.log(`✅ Выгружен файл: ${pageTitle}`);
    return true;
  } catch (error) {
    console.error(
      `❌ Ошибка при выгрузке "${fileName}":`,
      error.message
    );
    return false;
  }
}

/**
 * Рекурсивно обходит папку и выгружает все .md файлы
 */
async function walkDocsDirectory(dir, parentId, notion) {
  const items = fs.readdirSync(dir);
  let uploadedCount = 0;

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Пропускаем папку from-notion (она содержит синхронизированный контент)
      if (item === "from-notion") continue;

      console.log(`\n📁 Обходим папку: ${item}`);
      // TODO: Можно создать подпапку в Notion если нужна вложенная структура
      const count = await walkDocsDirectory(itemPath, parentId, notion);
      uploadedCount += count;
    } else if (item.endsWith(".md")) {
      const success = await uploadDocFile(parentId, itemPath, item);
      if (success) uploadedCount++;
    }
  }

  return uploadedCount;
}

/**
 * Главная функция: выгружает документацию в Notion
 */
async function pushDocsToNotion() {
  console.log("\n📤 Начинаем выгрузку документации в Notion...\n");

  if (!process.env.NOTION_API_KEY) {
    console.error(
      "❌ NOTION_API_KEY не установлен! Добавь переменную окружения."
    );
    process.exit(1);
  }

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Папка docs не найдена: ${DOCS_DIR}`);
    process.exit(1);
  }

  try {
    // Получаем информацию о пользователе
    const workspace = await notion.users.me();
    console.log(`👤 Подключено к Notion как: ${workspace.name || "User"}\n`);

    // TODO: Нужно получить ID "Yes Studio" папки
    // Временное решение: попросим пользователя установить переменную или найдём по названию
    const yesStudioId = process.env.YES_STUDIO_PAGE_ID;

    if (!yesStudioId) {
      console.error("❌ YES_STUDIO_PAGE_ID не установлен!");
      console.log("💡 Добавь переменную окружения с ID страницы 'Yes Studio' из Notion");
      console.log("   Найди ID в URL: notion.so/workspace/[PAGE_ID]");
      process.exit(1);
    }

    console.log(`🔍 Используем папку 'Yes Studio' (ID: ${yesStudioId})\n`);

    // Находим или создаём папку "Project Docs"
    const projectDocsId = await ensureProjectDocsFolder(yesStudioId);
    if (!projectDocsId) {
      console.error("❌ Не удалось найти или создать папку 'Project Docs'");
      process.exit(1);
    }

    // Выгружаем все документы
    console.log("\n📥 Выгружаем документацию...\n");
    const uploadedCount = await walkDocsDirectory(DOCS_DIR, projectDocsId, notion);

    console.log(
      `\n✨ Выгрузка завершена! Загружено файлов: ${uploadedCount}`
    );
    console.log(`📁 Документация находится в: Notion → Yes Studio → Project Docs`);
  } catch (error) {
    console.error("❌ Критическая ошибка:", error.message);
    process.exit(1);
  }
}

// Запуск выгрузки
pushDocsToNotion();
