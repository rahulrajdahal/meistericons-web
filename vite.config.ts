import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@/app': path.resolve(__dirname, './src/app'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
