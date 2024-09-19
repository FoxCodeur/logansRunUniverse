import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin React
    // Suppression de compressionPlugin ici
  ],
  build: {
    minify: "terser", // Utilisation de Terser pour la minification
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les appels console.log lors de la minification
      },
    },
  },
});
