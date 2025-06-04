import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Obtenir __dirname en ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias pour éviter les chemins relatifs
    },
  },
  build: {
    minify: "terser", // Utilisation de Terser pour la minification
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les appels console.log lors de la minification
      },
    },
  },
});
