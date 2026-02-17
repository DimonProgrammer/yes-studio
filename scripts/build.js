import { cpSync, mkdirSync, rmSync, existsSync, renameSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const DIST = 'dist';

// Build React SPA with Vite (outputs to dist/)
console.log('⚡ Building React SPA with Vite...');
execSync('npx vite build', { stdio: 'inherit' });

// Vite outputs as app.html — rename to index.html for Vercel
const appHtml = join(DIST, 'app.html');
const indexHtml = join(DIST, 'index.html');
if (existsSync(appHtml)) {
  if (existsSync(indexHtml)) rmSync(indexHtml);
  renameSync(appHtml, indexHtml);
  console.log('✓ app.html → index.html');
}
console.log('✓ React SPA built → dist/');

// Build Astro blog (outputs to dist/blog/)
if (existsSync('blog/package.json')) {
  console.log('\n📝 Building blog...');
  try {
    execSync('cd blog && npm install --silent && npm run build', { stdio: 'inherit' });
    console.log('✓ Blog built → dist/blog/');
  } catch (e) {
    console.warn('⚠ Blog build skipped (error or not configured yet)');
  }
}

// Copy logos
for (const f of ['logo01.svg', 'logo02.svg']) {
  if (existsSync(f)) {
    cpSync(f, join(DIST, f));
    console.log(`✓ ${f}`);
  }
}

// Copy SEO root files (must be at domain root)
for (const f of ['robots.txt', 'sitemap.xml']) {
  const src = join('public', f);
  if (existsSync(src)) {
    cpSync(src, join(DIST, f));
    console.log(`✓ ${f} → dist/ (root)`);
  }
}

console.log('\n✅ Build complete → dist/');
