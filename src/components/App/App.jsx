import React from "react";
import { Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { HelmetProvider } from "react-helmet-async"; // Importe HelmetProvider
import "./App.scss";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import routesConfig from "../../config/routesConfig";

const App = () => {
  return (
    // Ici, HelmetProvider englobe l'application, permettant à Helmet d'ajuster
    // dynamiquement chaque balises <head> en fonction des métadonnées définies dans chaque
    // composant.
    <HelmetProvider>
      <ParallaxProvider>
        <div className="app">
          <Nav />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
                exact={route.exact}
              />
            ))}
          </Routes>
          <main className="main"></main>
          <Footer />
        </div>
      </ParallaxProvider>
    </HelmetProvider>
  );
};

export default App;
