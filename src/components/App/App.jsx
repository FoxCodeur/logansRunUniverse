import React from "react";
import { Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax"; // Import du
// ParallaxProvider pour activer les effets parallaxes sur les composants
// enfants.
import { HelmetProvider } from "react-helmet-async"; // HelmetProvider
// permet de gérer en dynamique les balises <head>, comme les métadonnées et
// les titres des pages.
import "./App.scss";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import routesConfig from "../../config/routesConfig";

const App = () => {
  return (
    // HelmetProvider englobe l'application pour que chaque composant puisse
    // gérer ses propres métadonnées. Cela permet de modifier les balises
    // <title>, <meta>, etc., à chaque changement de page.
    <HelmetProvider>
      {/* Le ParallaxProvider permet de gérer les effets de défilement
      // parallax pour tous les éléments à l'intérieur de l'application. */}
      <ParallaxProvider>
        {/* La div "app" est l'élément racine de l'application. Elle englobe les composants de navigation, les routes, et le footer. */}
        <div className="app">
          {/* Nav est le composant de navigation. Il est statique et s'affiche sur toutes les pages. */}
          <Nav />

          {/* Routes contient les différentes routes de l'application. 
              Chaque route est définie dans routesConfig et correspond à un
              chemin et à un composant spécifique.
              Ici, on mappe chaque entrée de routesConfig pour générer un
              élément <Route> avec les propriétés correspondantes. */}
          <Routes>
            {routesConfig.map((route, index) => (
              // Pour chaque route, un élément Route est créé avec une clé unique (index),
              // le chemin (path), et le composant qui sera rendu (element).
              <Route
                key={index}
                path={route.path} // Définition du chemin (exemple : "/home").
                element={<route.element />}
              />
            ))}
          </Routes>

          {/* La balise <main> pourrait contenir du contenu principal de la page, mais elle est vide pour l'instant. 
              Elle pourrait être stylisée via le SCSS pour le layout général. */}
          <main className="main"></main>

          {/* Footer est le composant de pied de page, il est affiché sur toutes les pages. */}
          <Footer />
        </div>
      </ParallaxProvider>
    </HelmetProvider>
  );
};

export default App;
