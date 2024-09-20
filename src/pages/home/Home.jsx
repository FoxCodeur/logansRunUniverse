import React, { Suspense } from "react"; // Importe React et le composant Suspense pour gérer le code splitting.
import { Helmet } from "react-helmet"; // Importe Helmet pour gérer les balises meta au niveau du document.
import "./Home.scss"; // Importe les styles spécifiques au composant Home.

import HomeSectionUn from "./homeSectionUn/HomeSectionUn"; // Importation de différents composants utilisés dans la page d'accueil.
import HomeSectionDeux from "./homeSectionDeux/HomeSectionDeux";
import HomeSlider from "./homeSlider/HomeSlider";
import HomeSectionTrois from "./homeSectionTrois/HomeSectionTrois";
import HomeSectionModale from "./homeSectionModale/HomeSectionModale";
import HomeSectionQuatre from "./homeSectionQuatre/HomeSectionQuatre";
import HomeSectionCinq from "./homeSectionCinq/HomeSectionCinq";
import HomeSectionSix from "./homeSectionSix/HomeSectionSix";
import HomeSectionSept from "./sectionSept/HomeSectionSept";
import UpButton from "./homenav/upButton/UpButton"; // Importation du bouton pour remonter en haut de la page.
import HomeSectionBGVideo from "./homeSectionBGVideo/HomeSectionBGVideo"; // Importation d'une section contenant une vidéo en arrière-plan.
import HomeSectionDbMovies from "./homeSectionDbMovies/HomeSectionDbMovies"; // Importation d'une section avec une base de données de films.
import HomeSectionParallax from "./homeSectionParallax/HomeSectionParallax"; // Section qui utilise un effet Parallax.
import HomeWaveNav from "./homeWaveNav/HomeWaveNav"; // Importation d'une navigation spécifique en forme d'ondes.

const Home = () => {
  return (
    <div className="homeContainer">
      {/* React Helmet : Ce composant permet de modifier les balises <head> du document HTML, très utile pour le SEO (référencement) */}
      <Helmet>
        <title>Logan's Run Fansite - Home</title>{" "}
        {/* Définit le titre de la page */}
        <meta
          name="description"
          content="Welcome to the Logan's Run Fansite, showcasing content related to the iconic sci-fi novel by William F. Nolan."
        />{" "}
        {/* Définition de la balise meta description pour le référencement */}
        {/* D'autres balises meta peuvent être ajoutées ici pour améliorer le SEO */}
      </Helmet>

      {/* Suspense est utilisé ici pour afficher un fallback (par ex. un écran
       de chargement) pendant que les composants asynchrones sont chargés */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Appel de plusieurs sections de la page d'accueil */}
        <UpButton /> {/* Bouton permettant de remonter en haut de la page */}
        <HomeWaveNav />
        <HomeSectionUn />
        <HomeSectionDeux />
        <HomeSlider /> <HomeSectionTrois />
        <HomeSectionModale />
        <HomeSectionQuatre />
        <HomeSectionCinq />
        <HomeSectionBGVideo />
        <HomeSectionSix />
        <HomeSectionParallax />
        <HomeSectionSept />
        <HomeSectionDbMovies />{" "}
        {/* Section avec une base de données ou des informations sur des
         films */}
      </Suspense>
    </div>
  );
};

export default Home;
