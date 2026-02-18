import { Client } from "@notionhq/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const SYNC_DIR = path.join(PROJECT_ROOT, "docs", "from-notion");

// Инициализация Notion клиента
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Создаём директорию для синхронизации если её нет
if (!fs.existsSync(SYNC_DIR)) {
  fs.mkdirSync(SYNC_DIR, { recursive: true });
  console.log(`✅ Создана папка: ${SYNC_DIR}`);
}

/**
 * Находит страницу по названию (рекурсивно)
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
 * Экспортирует контент страницы в файл
 */
async function exportPageContent(pageId, fileName) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({ block_id: pageId });

    const content = {
      title: page.properties.title?.title?.[0]?.plain_text || "Untitled",
      created: page.created_time,
      updated: page.last_edited_time,
      blocks: [],
    };

    for (const block of blocks.results) {
      const blockContent = extractBlockContent(block);
      if (blockContent) {
        content.blocks.push(blockContent);
      }
    }

    const filePath = path.join(SYNC_DIR, `${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`✅ Экспортирована страница: ${fileName}`);

    return true;
  } catch (error) {
    console.error(`❌ Ошибка при экспорте "${fileName}":`, error.message);
    return false;
  }
}

/**
 * Извлекает контент блока
 */
function extractBlockContent(block) {
  const content = {
    type: block.type,
    id: block.id,
  };

  switch (block.type) {
    case "paragraph":
      content.text = block.paragraph.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "heading_1":
      content.text = block.heading_1.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "heading_2":
      content.text = block.heading_2.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "heading_3":
      content.text = block.heading_3.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "bulleted_list_item":
      content.text = block.bulleted_list_item.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "numbered_list_item":
      content.text = block.numbered_list_item.rich_text
        .map((t) => t.plain_text)
        .join("");
      break;
    case "image":
      content.url =
        block.image.external?.url || block.image.file?.url || null;
      break;
    default:
      return null;
  }

  return content;
}

/**
 * Синхронизирует папку "Yes Studio" из Notion
 */
async function syncYesStudio() {
  console.log("\n🔄 Начинаем синхронизацию с Notion...\n");

  if (!process.env.NOTION_API_KEY) {
    console.error(
      "❌ NOTION_API_KEY не установлен! Добавь переменную окружения."
    );
    process.exit(1);
  }

  try {
    // Получаем корневой workspace ID
    const workspace = await notion.users.me();
    console.log(`👤 Подключено к Notion как: ${workspace.name || "User"}\n`);

    // Поиск папки "Yes Studio" в корне Notion
    console.log("🔍 Ищем папку 'Yes Studio'...");
    const yesStudioId = await findPageByTitle(workspace.id, "Yes Studio");

    if (!yesStudioId) {
      console.warn("⚠️  Папка 'Yes Studio' не найдена в корне Notion.");
      console.log(
        "💡 Убедись, что папка интегрирована с твоей Notion Integration."
      );
      return;
    }

    console.log(`✅ Найдена папка 'Yes Studio' (ID: ${yesStudioId})\n`);

    // Получаем все дочерние страницы/папки
    console.log("📥 Экспортируем содержимое...\n");
    const response = await notion.blocks.children.list({
      block_id: yesStudioId,
    });

    let exportedCount = 0;
    for (const block of response.results) {
      if (block.type === "child_page") {
        const pageTitle = block.child_page.title;
        const success = await exportPageContent(
          block.id,
          pageTitle.toLowerCase().replace(/\s+/g, "-")
        );
        if (success) exportedCount++;
      }
    }

    console.log(`\n✨ Синхронизация завершена! Экспортировано: ${exportedCount} страниц\n`);
    console.log(`📁 Файлы сохранены в: ${SYNC_DIR}`);
  } catch (error) {
    console.error("❌ Критическая ошибка:", error.message);
    process.exit(1);
  }
}

// Запуск синхронизации
syncYesStudio();
