import React from "react";
import { createRoot } from "react-dom/client"; // Pour créer la racine React (React 18+)
import { BrowserRouter } from "react-router-dom"; // Pour la gestion des routes côté client (SPA)
import App from "./components/App/App"; // Composant principal de l'application
import { DataProvider } from "./context/DataContext"; // Provider pour le contexte de données globales
import { PortfolioProvider } from "../src/context/PortfolioProvider"; // Provider pour le contexte du portfolio
import "./styles/index.scss"; // Fichier global de styles SCSS

// On récupère l'élément dans lequel React va "monter" l'application
const root = createRoot(document.getElementById("root"));

// On utilise root.render pour afficher l'application dans le DOM
root.render(
  // BrowserRouter englobe toute l'application pour activer la navigation par URL (React Router)
  <BrowserRouter
    future={{
      v7_startTransition: true, // Active des fonctionnalités avancées de navigation (React Router v7+)
      v7_relativeSplatPath: true, // Gère mieux les chemins imbriqués (React Router v7+)
    }}
  >
    {/* DataProvider fournit des données et fonctions globales accessibles partout dans l'app */}
    <DataProvider>
      {/* PortfolioProvider gère le contexte spécifique à la partie portfolio */}
      <PortfolioProvider>
        {/* App est le composant racine de l'application */}
        <App />
      </PortfolioProvider>
    </DataProvider>
  </BrowserRouter>
);
