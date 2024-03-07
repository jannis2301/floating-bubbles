import { defineConfig } from 'vite';

export default defineConfig({
  base: '/floating-bubbles/',
  build: {
    sourcemap: true,
    minify: 'esbuild',
  },
});
