import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@' points to './src'
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // only if you use lucide-react, otherwise remove
  },
  server: {
    port: 3000, // Optional: set dev server port
    open: true, // Optional: open browser automatically
  },
  build: {
    outDir: 'dist', // default output directory
    assetsDir: 'assets', // assets directory inside build folder
  },
});
