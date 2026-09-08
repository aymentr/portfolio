import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Both GitHub Pages (custom domain aymentroudi.com) and Cloudflare
  // Workers serve this from a domain root, not a subpath — root ('/') is
  // correct for both. VITE_BASE_PATH stays overridable in case a future
  // deploy target needs a subpath again.
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
