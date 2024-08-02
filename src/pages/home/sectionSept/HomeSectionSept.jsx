import React from "react";
import "./HomeSectionSept.scss";
import "../Home.scss";
import whiteCristal from "../../../assets/images/flowers-index/white-flower.png";
import yellowCristal from "../../../assets/images/flowers-index/yellow-flower.png";
import blueCristal from "../../../assets/images/flowers-index/blue-flower.png";
import redCristal from "../../../assets/images/flowers-index/red-flower.png";
import blackCristal from "../../../assets/images/flowers-index/black-flower.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeSectionSept = () => {
  return (
    <div className="marginUpDownContainer">
      <div className="tiret"></div>
      {/* white period */}
      <section className="box_center section-zero-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect">
              Fleur de vie : blanche
            </h1>
            <p className="text-flower">naissance</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={whiteCristal}
              alt="cristal de vie incolore"
              loading="lazy" // Cet attribut est utilisé pour activer le chargement paresseux (lazy loading) des images dans les navigateurs qui le prennent en charge. L'idée est de différer le chargement des images jusqu'à ce qu'elles soient visibles à l'écran, améliorant ainsi les performances en réduisant le temps de chargement initial de la page.
            />
          </div>
        </div>
      </section>
      {/* yellow period */}
      <section className="box_center section-one-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect2">
              Fleur de vie : jaune
            </h1>
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
            />
          </div>
        </div>
      </section>
      {/* blue period */}
      <section className="box_center section-two-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect">
              Fleur de vie : bleue
            </h1>
            <p className="text-flower">de 7 à 13 ans</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={blueCristal}
              alt="cristal de vie phase bleue"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* red period */}
      <section className="box_center section-three-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect2">
              Fleur de vie : rouge
            </h1>
            <p className="text-flower">de 14 à 20 ans</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={redCristal}
              alt="cristal de vie phase rouge"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* blinking red */}
      <section className="box_center section-four-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect2">
              Fleur de vie : rouge clignotante
            </h1>
            <p className="text-flower">dernier jour</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower blinking-flower"
              src={redCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
            />
            <LazyLoadImage
              className="organic-flower "
              src={blackCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* black cristal */}
      <section className="box_center section-five-flower">
        <div className="flower-container">
          <div className="left-flower-column">
            <h1 className="text-flower text-flower-effect3">
              Fleur de vie : noire
            </h1>
            <p className="text-flower">citoyen renégat</p>
          </div>
          <div className="right-flower-column">
            <LazyLoadImage
              className="organic-flower"
              src={blackCristal}
              alt="cristal de vie rougle clignotant"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSectionSept;
