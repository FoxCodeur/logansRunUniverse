import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";
import HomeSectionUn from "./homeSectionUn/HomeSectionUn";

import HomeSectionDeux from "./homeSectionDeux/HomeSectionDeux";

import HomeSlider from "./homeSlider/HomeSlider";

import HomeSectionTrois from "./homeSectionTrois/HomeSectionTrois";

import HomeSectionModale from "./homeSectionModale/HomeSectionModale";

import HomeSectionQuatre from "./homeSectionQuatre/HomeSectionQuatre";

import HomeSectionCinq from "./homeSectionCinq/HomeSectionCinq";

import HomeSectionSix from "./homeSectionSix/HomeSectionSix";

import HomeSectionSept from "./sectionSept/HomeSectionSept";

import UpButton from "./homenav/upButton/UpButton";

import HomeSectionBGVideo from "./homeSectionBGVideo/HomeSectionBGVideo";

import HomeSectionDbMovies from "./homeSectionDbMovies/HomeSectionDbMovies";

import HomeSectionParallax from "./homeSectionParallax/HomeSectionParallax";

import HomeWaveNav from "./homeWaveNav/HomeWaveNav";

const Home = () => {
  return (
    <div className="homeContainer">
      {/* React Helmet. ce composant permet de gérer les balises méta au niveau du document,
    ce qui est très important pour le référencement et le partage de contenu sur les médias
    sociaux. */}
      <Helmet>
        <title>Logan's Run Fansite - Home</title>
        <meta
          name="description"
          content="Welcome to the Logan's Run Fansite, showcasing content related to the iconic sci-fi novel by William F. Nolan."
        />
        {/* Ajoutez d'autres balises meta pertinentes pour le SEO */}
      </Helmet>
      {/* Composants optimisés pour le code splitting avec React.Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <UpButton />
        <HomeWaveNav />
        <HomeSectionUn />
        <HomeSectionDeux />
        <HomeSlider />
        <HomeSectionTrois />
        <HomeSectionModale />
        <HomeSectionQuatre />
        <HomeSectionCinq />
        <HomeSectionBGVideo />
        <HomeSectionSix />
        <HomeSectionParallax />
        <HomeSectionSept />
        <HomeSectionDbMovies />
      </Suspense>
    </div>
  );
};

export default Home;
