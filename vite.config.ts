import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Cloudflare Workers serves this from its own domain root, so root ('/')
  // is the default. GitHub Pages serves it at
  // https://aymentr.github.io/portfolio/, so that workflow sets
  // VITE_BASE_PATH=/portfolio/ to make assets resolve under the subpath.
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
});
