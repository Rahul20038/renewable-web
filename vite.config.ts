import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Maps '@' to the 'src' directory
    },
  },
  // Removed exclude for lucide-react to allow pre-bundling
  // optimizeDeps: {
  //   exclude: ['lucide-react'], 
  // },
  server: {
    port: 3000,
    open: true,
    hmr: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,         // Disabled sourcemaps for production for faster builds
    minify: 'esbuild',        // Explicit minification
    chunkSizeWarningLimit: 600,
    target: 'es2015',         // Target modern browsers efficiently
    cssCodeSplit: true,       // Enable CSS code splitting
  },
  css: {
    postcss: './postcss.config.js',
  },
});
