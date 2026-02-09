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
        main: resolve(__dirname, 'index.html'),
        red: resolve(__dirname, 'red.html'),
        cartier: resolve(__dirname, 'cartier.html'),
        heritage: resolve(__dirname, 'heritage.html'),
      },
    },
  },
});
