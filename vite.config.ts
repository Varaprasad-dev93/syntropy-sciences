import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two HTML entry points: the home page and the 404 page Cloudflare Pages serves
// for unknown paths. scripts/prerender.mjs fills both with server-rendered HTML.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
