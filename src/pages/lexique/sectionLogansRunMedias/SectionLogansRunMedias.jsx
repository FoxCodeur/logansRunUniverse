import React from "react";
import "./SectionLogansRunMedias.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fleurDeVieBlanche from "@/assets/images/images-générales/fleur_de_vie_blanche.png";
import fleurDeVieJaune from "@/assets/images/images-générales/fleur_de_vie_jaune.png";
import fleurDeVieBleue from "@/assets/images/images-générales/fleur_de_vie_bleue.png";
import fleurDeVieRouge from "@/assets/images/images-générales/fleur_de_vie_rouge.png";
import fleurDeVieNoire from "@/assets/images/images-générales/fleur_de_vie_noire.png";
import adventurecomicsBluewater from "@/assets/images/icones/adventurecomics_bluewater.png";
import logansRunWorldNovel from "@/assets/images/icones/logans_run_world_marvel.png";
import jessicaLexique from "@/assets/images/square grid images Lexique/JessicaLexique.png";
import LoganLexique from "@/assets/images/square grid images Lexique/loganLexique.png";
import revolverLexique from "@/assets/images/square grid images Lexique/revolverLexique.png";
import phaserLexique from "@/assets/images/square grid images Lexique/phaserLexique.png";
import traitvertical from "@/assets/images/images-générales/trait-vert-vertical.png";
import redLine from "@/assets/images/images-générales/redLine.png";

// import logansRunWorldMarvel from "../../../assets/images/images-générales/logans_run_world_marvel.png";
const SectionLogansRunMedias = () => {
  return (
    <>
      <div className="box_center">
        <LazyLoadImage
          src={traitvertical}
          alt="trait vert vertical"
          loading="lazy"
        />
      </div>
      <div className="section_Container_Wihout_Padding">
        <LazyLoadImage
          className="bandeau_lg"
          src={adventurecomicsBluewater}
          alt="les maisons d'éditions qui ont publié des comics sur Logans's run sont, Bluewater comics, Adventure comics, Marvel comics. "
          loading="lazy"
        />
        <LazyLoadImage className="redLine" src={redLine} alt="ligne rouge" />

        <div className="Lexique_gallery_Container">
          <LazyLoadImage
            src={revolverLexique}
            className="squareImagesLexique"
            loading="lazy"
          />
          <LazyLoadImage
            src={phaserLexique}
            className="squareImagesLexique"
            loading="lazy"
          />
          <div className="flowers_container box_center">
            {/* <img src={fleurDeVieBlanche} className="lexique_flowers wf" />
            <img src={fleurDeVieJaune} className="lexique_flowers yf" />
            <img src={fleurDeVieBleue} className="lexique_flowers bf" /> */}
            <LazyLoadImage
              src={fleurDeVieNoire}
              className="lexique_flowers bf"
              loading="lazy"
            />
            <LazyLoadImage
              src={fleurDeVieRouge}
              className="lexique_flowers rf"
              loading="lazy"
            />
          </div>
          <LazyLoadImage src={jessicaLexique} className="squareImagesLexique" />
          <img src={LoganLexique} className="squareImagesLexique" />
        </div>
        <LazyLoadImage className="redLine" src={redLine} alt="ligne rouge" />
        <LazyLoadImage
          className="bandeau_lg"
          src={logansRunWorldNovel}
          alt="Seuls deux romans ainsi que le film ont été traduits en français, Logan's run et Logan's World."
          loading="lazy"
        />
      </div>

      <div className="box_center">
        <LazyLoadImage
          src={traitvertical}
          alt="trait vert vertical"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SectionLogansRunMedias;
