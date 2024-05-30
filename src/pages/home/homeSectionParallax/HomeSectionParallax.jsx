import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./HomeSectionParallax.scss";
import afficheBarillet from "../../../assets/images/images-générales/barillet-affiche.png";
import afficheBarilletcover from "../../../assets/images/images-générales/six-way-to-die.png";

const HomeSectionParallax = () => {
  return (
    <div className="parallax-container">
      {/* La première valeur (-50) représente la position de départ en 
    pourcentage de la hauteur de l'élément. */}
      {/* La deuxième valeur (50) représente la position d'arrivée en
       pourcentage de la hauteur de l'élément. */}
      {/* En utilisant translateY={[-50, 50]}, vous créez un effet de 
       parallaxe où l'élément se déplace verticalement à mesure que 
       l'utilisateur fait défiler la page, ajoutant un effet visuel attrayant
        et dynamique. Vous pouvez ajuster ces valeurs pour obtenir différents
         effets de mouvement selon vos besoins. */}

      <img
        className="afficheBarillet"
        src={afficheBarillet}
        alt="barillet de revolver avec munitions"
      />

      <Parallax speed={70} opacity={[1, 1]}>
        <img
          className="coverBarillet"
          src={afficheBarilletcover}
          alt="six way to die cover"
        />
      </Parallax>
    </div>
  );
};

export default HomeSectionParallax;
