import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistre le plugin ScrollTrigger (indispensable pour déclencher les animations au scroll)
gsap.registerPlugin(ScrollTrigger);

/**
 * Composant d'affichage et animation d'images GSAP+ScrollTrigger
 * @param {Object[]} images - [{ refName, src, alt, className }]
 * @param {Function} buildTimeline - (refs, sectionRef) => void
 * @param {string} wrapperClass - classe CSS pour le wrapper externe
 * @param {string} sectionClass - classe CSS pour la section principale
 *
 * Fonctionnement :
 * - Génère dynamiquement des refs React pour chaque image (à partir de leur refName).
 * - Passe toutes les refs et la ref de section à la fonction d'animation (buildTimeline).
 * - Rendu de la section avec toutes les images positionnées pour être animées.
 */
const GsapScrollAnimatedImages = ({
  images,
  buildTimeline,
  wrapperClass = "",
  sectionClass = "",
}) => {
  // Création des refs dynamiques pour chaque image du tableau
  const sectionRef = useRef(null);
  const refs = useRef(
    images.reduce((acc, img) => {
      acc[img.refName] = React.createRef();
      return acc;
    }, {})
  );

  useEffect(() => {
    // Initialise les animations GSAP dans le contexte de la section
    const ctx = gsap.context(() => {
      buildTimeline(refs.current, sectionRef);
    }, sectionRef);
    // Nettoyage à la destruction du composant pour éviter les effets de bord
    return () => ctx.revert();
  }, [buildTimeline]);

  return (
    <div className={wrapperClass}>
      <section className={sectionClass} ref={sectionRef}>
        {images.map((img) => (
          <img
            key={img.refName}
            ref={refs.current[img.refName]}
            src={img.src}
            alt={img.alt}
            className={img.className}
            draggable="false"
          />
        ))}
      </section>
    </div>
  );
};

GsapScrollAnimatedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      refName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
    })
  ).isRequired,
  buildTimeline: PropTypes.func.isRequired,
  wrapperClass: PropTypes.string,
  sectionClass: PropTypes.string,
};

export default GsapScrollAnimatedImages;
