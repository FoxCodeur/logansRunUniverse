import { Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import du fichier routesConfig qui contient le tableau de l'ensemble des
// routes de l'application.
import routesConfig from "../../config/routesConfig";

const App = () => {
  return (
    // On encapsule App avec ParallaxProvider, de la sorte tous les composants enfants qui l'utilisent
    //bénéficieront  de l'effet parallaxe avec l'ensemble des fonctionnalités.
    <ParallaxProvider>
      <div className="app">
        {/* header */}
        <Nav />
        {/* end header */}
        <Routes>
          {/* routesConfig est un tableau contenant la configuration des routes.
          avec la méthode map() j'itère sur chaque élément du tableau routesConfig.
          Pour chaque route dans routesConfig, la fonction de rappel est appelée avec deux arguments : route (l'objet représentant la configuration de la route)
          et index (l'indice de l'élément dans le tableau). */}
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
        {/* FOOTER */}
        <Footer />
        {/* END FOOTER */}
      </div>
    </ParallaxProvider>
  );
};

export default App;
