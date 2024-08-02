import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compressionPlugin from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin React
    compressionPlugin({
      algorithm: "gzip", // Algorithme de compression à utiliser
      ext: [".js", ".jsx", ".css"], // Extensions de fichiers à compresser
    }),
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
