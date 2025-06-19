// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';

// Автоматический поиск всех CSS файлов
const cssFiles = glob.sync('./src/assets/css/**/*.css');

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        equipment: resolve(__dirname, 'src/pages/equipment/index.html'),
        analogs: resolve(__dirname, 'src/pages/analogs/index.html'),
        partners: resolve(__dirname, 'src/pages/partners/index.html'),
        contacts: resolve(__dirname, 'src/pages/contacts/index.html'),
      },
    },
    assetsDir: 'assets',
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
});
