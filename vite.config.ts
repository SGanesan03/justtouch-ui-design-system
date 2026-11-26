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
      '@justtouch/ui':  path.resolve(__dirname, 'src/lib/index.ts'),
      '@components':    path.resolve(__dirname, 'src/app/components'),
      '@pages':         path.resolve(__dirname, 'src/app/pages'),
      '@data':          path.resolve(__dirname, 'src/app/data'),
      '@hooks':         path.resolve(__dirname, 'src/app/hooks'),
      '@services':      path.resolve(__dirname, 'src/app/services'),
      '@constants':     path.resolve(__dirname, 'src/app/constants'),
      '@utils':         path.resolve(__dirname, 'src/lib/utils'),
      '@types':         path.resolve(__dirname, 'src/lib/types'),
      '@theme':         path.resolve(__dirname, 'src/lib/theme'),
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
