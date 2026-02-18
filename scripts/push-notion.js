import { Client } from "@notionhq/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, "..", "docs");

// Read API key from env or .env file
let NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  try {
    const envFile = fs.readFileSync(path.join(__dirname, "..", ".env"), "utf8");
    NOTION_API_KEY = envFile.split("\n").find(l => l.startsWith("NOTION_API_KEY="))?.split("=").slice(1).join("=").trim();
  } catch (e) { /* no .env */ }
}

if (!NOTION_API_KEY) {
  console.error("NOTION_API_KEY not found");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

function parseInline(text) {
  const parts = [];
  let remaining = text;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`(.+?)`/);

    let firstMatch = null;
    let firstIdx = remaining.length;

    if (boldMatch && boldMatch.index < firstIdx) {
      firstMatch = { type: "bold", match: boldMatch };
      firstIdx = boldMatch.index;
    }
    if (codeMatch && codeMatch.index < firstIdx) {
      firstMatch = { type: "code", match: codeMatch };
      firstIdx = codeMatch.index;
    }

    if (!firstMatch) {
      if (remaining) parts.push({ type: "text", text: { content: remaining } });
      break;
    }

    if (firstIdx > 0) {
      parts.push({ type: "text", text: { content: remaining.slice(0, firstIdx) } });
    }

    const m = firstMatch.match;
    if (firstMatch.type === "bold") {
      parts.push({ type: "text", text: { content: m[1] }, annotations: { bold: true } });
    } else {
      parts.push({ type: "text", text: { content: m[1] }, annotations: { code: true } });
    }

    remaining = remaining.slice(firstIdx + m[0].length);
  }

  return parts.length > 0 ? parts : [{ type: "text", text: { content: text } }];
}

function mdToBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let inCodeBlock = false;
  let codeContent = "";
  let codeLang = "";

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLang = line.slice(3).trim() || "plain text";
        codeContent = "";
      } else {
        inCodeBlock = false;
        blocks.push({
          object: "block", type: "code",
          code: {
            rich_text: [{ type: "text", text: { content: codeContent.replace(/\n$/, "") } }],
            language: codeLang === "json" ? "json" : codeLang === "bash" ? "bash" : "plain text"
          }
        });
      }
      continue;
    }

    if (inCodeBlock) { codeContent += line + "\n"; continue; }
    if (line.trim() === "") continue;
    if (line.trim() === "---") { blocks.push({ object: "block", type: "divider", divider: {} }); continue; }

    if (line.startsWith("# ")) {
      blocks.push({ object: "block", type: "heading_1", heading_1: { rich_text: parseInline(line.slice(2)) } });
    } else if (line.startsWith("## ")) {
      blocks.push({ object: "block", type: "heading_2", heading_2: { rich_text: parseInline(line.slice(3)) } });
    } else if (line.startsWith("### ")) {
      blocks.push({ object: "block", type: "heading_3", heading_3: { rich_text: parseInline(line.slice(4)) } });
    } else if (line.startsWith("- ")) {
      blocks.push({ object: "block", type: "bulleted_list_item", bulleted_list_item: { rich_text: parseInline(line.slice(2)) } });
    } else if (/^\d+\.\s/.test(line)) {
      const content = line.replace(/^\d+\.\s/, "");
      blocks.push({ object: "block", type: "numbered_list_item", numbered_list_item: { rich_text: parseInline(content) } });
    } else {
      blocks.push({ object: "block", type: "paragraph", paragraph: { rich_text: parseInline(line) } });
    }
  }

  return blocks;
}

async function findPageByTitle(parentId, title) {
  const children = await notion.blocks.children.list({ block_id: parentId, page_size: 100 });
  return children.results.find(b => b.type === "child_page" && b.child_page?.title === title);
}

async function main() {
  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith(".md"));
  if (files.length === 0) { console.log("No .md files in docs/"); return; }

  console.log("Pushing docs to Notion...\n");

  // Use existing workspace page as parent, or YES_STUDIO_PAGE_ID from env
  const parentPageId = process.env.YES_STUDIO_PAGE_ID || "2de76d27-a553-8192-9aca-db66781294ae";
  console.log("Using parent page:", parentPageId);

  for (const file of files) {
    const filePath = path.join(DOCS_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const title = file.replace(".md", "");
    const blocks = mdToBlocks(content);

    const existingChild = await findPageByTitle(parentPageId, title);
    let pageId;

    if (existingChild) {
      pageId = existingChild.id;
      // Clear old blocks
      const oldBlocks = await notion.blocks.children.list({ block_id: pageId, page_size: 100 });
      for (const b of oldBlocks.results) {
        try { await notion.blocks.delete({ block_id: b.id }); } catch (e) { /* skip */ }
      }
      console.log(`Updated: ${title}`);
    } else {
      const page = await notion.pages.create({
        parent: { page_id: parentPageId },
        properties: { title: { title: [{ text: { content: title } }] } }
      });
      pageId = page.id;
      console.log(`Created: ${title}`);
    }

    for (let i = 0; i < blocks.length; i += 100) {
      await notion.blocks.children.append({ block_id: pageId, children: blocks.slice(i, i + 100) });
    }
    console.log(`  -> ${blocks.length} blocks`);
  }

  console.log("\nDone!");
}

main().catch(e => { console.error(e.message); process.exit(1); });
