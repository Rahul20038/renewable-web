import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, 'src'), // '@' points to './src'
=======
      '@': path.resolve(__dirname, 'src'), // This allows @ to map to /src
>>>>>>> 817215daa211c05814d8d48ef5e3587081570540
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
