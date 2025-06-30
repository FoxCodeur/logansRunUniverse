import React from "react";
import "./HomeSectionTrois.scss";
import "../Home.scss";
import loganVersionUn from "@/assets/images/images-générales/logan1.webp";
import loganVersionDeux from "@/assets/images/images-générales/logan2.webp";
import loganVersionTrois from "@/assets/images/images-générales/logan3.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Importer les styles d'effet si nécessaire
const HomeSectionTrois = () => {
  return (
    <section className="marginUpDownContainer">
      <h2 className="fancy-undeline">L'antihéros</h2>
      <div className="scroll-reveal">
        <p>
          <span>
            Les Sandmen (limiers en Français) seuls autorités détenteurs d'une
            arme à feu, traquent, débusquent et terminent les fugitifs à l’aide
            de leurs revolvers ultra-perfectionnés. Logan (notre héros) est un
            agent du système. Compétiteur dans l'âme ce limier émérite voue une
            passion sans borne à sa fonction. Il découvre, après avoir accompli
            son devoir lors d'une banale mission, que le fugitif qu’il vient
            d’abattre prévoyait de rejoindre le Sanctuaire, une zone de non
            droit dissimulée quelque part sur Terre au sein de laquelle hommes
            et femmes vivent sans règles. Cette population renégate élève ainsi
            ses propres enfants mais aussi et le plus insuportable, ses
            habitants peuvent y mourir de vieillesse. Intolérable, Logan n'à
            qu'une idée en tête, débusquer ce satané refuge jonché de lâches, le
            détruire, aprés quoi il éliminera l'un aprés l'autre tous les
            criminels qui s'y sont terrés. Avec ce fait d'arme il deviendra dés
            lors la Légende parmi les limiers et même une fois réincarné, l'on
            retiendra son nom pour l'éternité.{" "}
          </span>
        </p>
      </div>
      <div className="tiret"></div>
      <div className="versions-logan grid">
        <div className="versions radiusVersionLogan">
          <LazyLoadImage
            src={loganVersionUn}
            alt="logan brandit son arme de service"
            effect="blur" // Effet de flou ou autre effet supporté
            // width={448}
            // height={643}
          />
        </div>
        <div className="shadowBallContainer">
          <div className="versions radiusVersionLoganDeux">
            <LazyLoadImage
              src={loganVersionDeux}
              alt="logan est à genoux"
              effect="blur" // Effet de flou ou autre effet supporté
              // width={444}
              // height={641}
            />
          </div>

          <section className="stage">
            <figure className="ball"></figure>
          </section>
          <section className="stage">
            <figure className="ball2"></figure>
          </section>
        </div>
        <div className="versions radiusVersionLogan">
          <LazyLoadImage
            src={loganVersionTrois}
            alt="logan porte sa tenue de service avec le casque de limier"
            effect="blur" // Effet de flou
            // width={444}
            // height={641}
          />
        </div>
      </div>
      <div className="moreMargintiret"></div>
    </section>
  );
};

export default HomeSectionTrois;
