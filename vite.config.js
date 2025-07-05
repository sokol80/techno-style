// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  plugins: [injectHTML()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/assets/components'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@styles': resolve(__dirname, 'src/assets/styles'),
      '@pages': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        equipment: resolve(__dirname, 'src/equipment/index.html'),
        analogs: resolve(__dirname, 'src/analogs/index.html'),
        partners: resolve(__dirname, 'src/partners/index.html'),
        contacts: resolve(__dirname, 'src/contacts/index.html'),
      },
    },
    assetsDir: 'assets',
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: '/',
    trailingSlash: 'never',
  },
  css: {
    devSourcemap: true,
  },
  publicDir: 'public',
});
