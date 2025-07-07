import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './src/templates/partials'
    })
  ],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true,
    port: 5173
  }
});
