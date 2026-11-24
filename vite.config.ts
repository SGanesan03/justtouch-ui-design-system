import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/justtouch-ui-design-system/',
  plugins: [react()],
  resolve: {
    alias: {
      '@':           path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages':      path.resolve(__dirname, 'src/pages'),
      '@data':       path.resolve(__dirname, 'src/data'),
      '@hooks':      path.resolve(__dirname, 'src/hooks'),
      '@services':   path.resolve(__dirname, 'src/services'),
      '@constants':  path.resolve(__dirname, 'src/constants'),
      '@utils':      path.resolve(__dirname, 'src/utils'),
      '@types':      path.resolve(__dirname, 'src/types'),
    },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
