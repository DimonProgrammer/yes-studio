import { cpSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const DIST = 'dist';
const MAX_FILE_SIZE = 90 * 1024 * 1024; // 90MB (Vercel limit ~100MB, keep margin)

// Clean dist
if (existsSync(DIST)) rmSync(DIST, { recursive: true });
mkdirSync(DIST, { recursive: true });

// Copy index.html
cpSync('index.html', join(DIST, 'index.html'));
console.log('✓ index.html');

// Copy logos
for (const f of ['logo01.svg', 'logo02.svg']) {
  if (existsSync(f)) {
    cpSync(f, join(DIST, f));
    console.log(`✓ ${f}`);
  }
}

// Copy public/ — skip large files and Cyrillic-named folders
function copyPublic(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const item of readdirSync(src)) {
    const srcPath = join(src, item);
    const destPath = join(dest, item);
    const stat = statSync(srcPath);

    // Skip Cyrillic-named items (original unprocessed files)
    if (/[а-яА-ЯёЁ]/.test(item)) {
      console.log(`⊘ Skipped (cyrillic name): ${srcPath}`);
      continue;
    }

    if (stat.isDirectory()) {
      copyPublic(srcPath, destPath);
    } else {
      if (stat.size > MAX_FILE_SIZE) {
        console.log(`⊘ Skipped (${(stat.size / 1024 / 1024).toFixed(0)}MB > 90MB limit): ${srcPath}`);
        continue;
      }
      cpSync(srcPath, destPath);
      console.log(`✓ ${srcPath} (${(stat.size / 1024).toFixed(0)}KB)`);
    }
  }
}

copyPublic('public', join(DIST, 'public'));

console.log('\n✅ Build complete → dist/');
