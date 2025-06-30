import React from "react";
import "./HomeSectionSept.scss";
import "../Home.scss";
import whiteCristal from "@/assets/images/flowers-index/white-flower.webp";
import yellowCristal from "@/assets/images/flowers-index/yellow-flower.webp";
import blueCristal from "@/assets/images/flowers-index/blue-flower.webp";
import redCristal from "@/assets/images/flowers-index/red-flower.webp";
import blackCristal from "@/assets/images/flowers-index/black-flower.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsMobile from "@/hooks/useIsMobile";

const HomeSectionSept = () => {
  const isMobile = useIsMobile();

  // Ne pas afficher cette section sur mobile pour optimiser la perf
  if (isMobile) return null;

  return (
    <div className="marginUpDownContainer">
      <div className="tiret"></div>
      {/* white period */}
      <article className="box_center section-zero-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect">
              Fleur de vie : blanche
            </h3>
            <p className="text-flower">naissance</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={whiteCristal}
              alt="cristal de vie incolore"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
      {/* yellow period */}
      <article className="box_center section-one-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect2">
              Fleur de vie : jaune
            </h3>
            <p className="text-flower">
              de la naissance jusqu'à l'âge de 6 ans
            </p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={yellowCristal}
              alt="cristal de vie phase jaune"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
      {/* blue period */}
      <article className="box_center section-two-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect">
              Fleur de vie : bleue
            </h3>
            <p className="text-flower">de 7 à 13 ans</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={blueCristal}
              alt="cristal de vie phase bleue"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
      {/* red period */}
      <article className="box_center section-three-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect2">
              Fleur de vie : rouge
            </h3>
            <p className="text-flower">de 14 à 20 ans</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={redCristal}
              alt="cristal de vie phase rouge"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
      {/* blinking red */}
      <article className="box_center section-four-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect2">
              Fleur de vie : rouge clignotante
            </h3>
            <p className="text-flower">dernier jour</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower blinking-flower"
              src={redCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
              width={838}
              height={748}
            />
            <LazyLoadImage
              className="organic-flower "
              src={blackCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
      {/* black cristal */}
      <article className="box_center section-five-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h3 className="text-flower text-flower-effect3">
              Fleur de vie : noire
            </h3>
            <p className="text-flower">citoyen renégat</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={blackCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
              width={838}
              height={748}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeSectionSept;
