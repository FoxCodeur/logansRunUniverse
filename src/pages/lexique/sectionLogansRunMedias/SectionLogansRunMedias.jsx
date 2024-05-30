import React from "react";
import "./SectionLogansRunMedias.scss";
import redCristal from "../../../assets/images/images-générales/red_cristal.png";
import adventurecomicsBluewater from "../../../assets/images/icones/adventurecomics_bluewater.png";
import logansRunWorldNovel from "../../../assets/images/icones/logans_run_world_marvel.png";

// import logansRunWorldMarvel from "../../../assets/images/images-générales/logans_run_world_marvel.png";
const SectionLogansRunMedias = () => {
  return (
    <>
      <div className="section_Container_Wihout_Padding">
        <img
          className="bandeau_lg"
          src={adventurecomicsBluewater}
          alt="les maisons d'éditions qui ont publié des comics sur Logans's run sont, Bluewater comics, Adventure comics, Marvel comics. "
        />
        <img src={redCristal} className="circle_pulse lexique_Circle_width" />
        <img
          className="bandeau_lg"
          src={logansRunWorldNovel}
          alt="Seuls deux romans ainsi que le film ont été traduits en français, Logan's run et Logan's World."
        />
      </div>
    </>
  );
};

export default SectionLogansRunMedias;
