import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./HomeSectionParallax.scss";
import afficheBarillet from "@/assets/images/images-générales/barillet-affiche.webp";
import afficheBarilletcover from "@/assets/images/images-générales/six-way-to-die.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsMobile from "@/hooks/useIsMobile";

const HomeSectionParallax = () => {
  const isMobile = useIsMobile();

  // Ne pas afficher la section sur mobile pour optimiser les performances et éviter le chargement inutile des images
  if (isMobile) return null;

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
        width={882}
        height={656}
      />
      {/* En utilisant LazyLoadImage avec l'effet opacity, vos images
       l'image est chargées de manière différée et s'affiche à mesure que
      l'on scrolle. */}
      <Parallax speed={70} opacity={[1, 1]}>
        <LazyLoadImage
          className="coverBarillet"
          src={afficheBarilletcover}
          alt="six way to die cover"
          loading="lazy"
          width={530}
          height={531}
        />
      </Parallax>
    </div>
  );
};

export default HomeSectionParallax;
