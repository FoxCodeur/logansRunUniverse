import React from "react";
import { createRoot } from "react-dom/client"; // Import de createRoot,
// méthode utilisée pour créer un point de montage React dans le DOM.
import { BrowserRouter } from "react-router-dom"; // Import de BrowserRouter,
// un composant pour activer la gestion des routes dans une application React
// côté client.
import App from "./components/App/App";
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));
// Création de la racine React dans le DOM. Le point de montage est un
// élément avec l'ID "root" dans le fichier HTML (public/index.html).

root.render(
  // Méthode render pour afficher l'application dans le DOM. Ce qui suit
  // sera rendu à l'intérieur de l'élément avec l'ID "root".

  <BrowserRouter>
    {/* BrowserRouter enveloppe le composant App pour permettre la gestion
    des routes. 
    Cela permet à l'application de réagir aux changements de l'URL et de
    rendre les composants associés. */}
    <App />
  </BrowserRouter>
);
