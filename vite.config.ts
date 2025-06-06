import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Maps '@' to the 'src' directory
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from dependency optimization (since you're using it)
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the browser on dev server start
    hmr: true, // Enable Hot Module Replacement (default is true, but explicitly set for clarity)
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    assetsDir: 'assets', // Directory for static assets inside the build output
    sourcemap: true, // Generate sourcemaps for easier debugging (optional, can be set to false in production)
  },
  css: {
    postcss: './postcss.config.js', // If you're using PostCSS (e.g., for Tailwind CSS)
  },
});