import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://yes-studio.agency',
  base: '/blog',
  output: 'static',
  outDir: '../dist/blog',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
})
