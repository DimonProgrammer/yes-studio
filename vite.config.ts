import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        // index.html is located in the `public` folder in this repo
        main: resolve(__dirname, 'public', 'index.html'),
      },
    },
  },
});
