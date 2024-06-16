import React from "react";
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
    </div>
  );
};

export default Home;
