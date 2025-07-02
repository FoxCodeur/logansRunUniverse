import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// On enregistre le plugin GSAP ScrollTrigger, nécessaire pour les déclencheurs d’animation au scroll.
gsap.registerPlugin(ScrollTrigger);

/**
 * Composant React pour afficher et animer dynamiquement des images avec GSAP+ScrollTrigger.
 *
 * @param {Object[]} images - Tableau d’objets images ({ refName, src, alt, className })
 * @param {Function} buildTimeline - Fonction qui construit l’animation GSAP (reçoit les refs et la ref de section)
 * @param {string} wrapperClass - Classe CSS optionnelle pour le wrapper externe
 * @param {string} sectionClass - Classe CSS optionnelle pour la section contenant les images
 *
 * Fonctionnement :
 * - Crée une ref pour la section contenant les images.
 * - Crée dynamiquement une ref React pour chaque image, basée sur refName.
 * - Passe toutes les refs à buildTimeline pour brancher les animations GSAP/ScrollTrigger.
 * - Nettoie les effets GSAP lors du démontage du composant.
 */
const GsapScrollAnimatedImages = ({
  images,
  buildTimeline,
  wrapperClass = "",
  sectionClass = "",
}) => {
  // Ref pour la section principale qui regroupe toutes les images.
  const sectionRef = useRef(null);

  // Création d’un objet { refName: ref } pour chaque image, stockée dans une ref persistante.
  // Cela permet d'accéder facilement à chaque image dans l'animation.
  const refs = useRef(
    images.reduce((acc, img) => {
      acc[img.refName] = React.createRef(); // Création d’une ref pour chaque image
      return acc;
    }, {})
  );

  useEffect(() => {
    // Initialisation de l’animation GSAP dans un contexte lié à
    // sectionRef.
    // buildTimeline reçoit toutes les refs pour animer les images.
    const ctx = gsap.context(() => {
      buildTimeline(refs.current, sectionRef);
    }, sectionRef);

    // Nettoyage : désactive les animations GSAP et nettoie le contexte lors du démontage du composant.
    return () => ctx.revert();
  }, [buildTimeline]); // On relance l’effet si la fonction d’animation change

  return (
    <div className={wrapperClass}>
      <section className={sectionClass} ref={sectionRef}>
        {/* Génère un <img> pour chaque objet du tableau images */}
        {images.map((img) => (
          <img
            key={img.refName}
            ref={refs.current[img.refName]} // Associe la ref correspondante à chaque image
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

// Définition des types des props pour valider l’utilisation correcte du composant
GsapScrollAnimatedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      refName: PropTypes.string.isRequired, // Nom unique pour la ref de l’image
      src: PropTypes.string.isRequired, // URL de l’image
      alt: PropTypes.string, // Texte alternatif
      className: PropTypes.string, // Classe CSS optionnelle
    })
  ).isRequired,
  buildTimeline: PropTypes.func.isRequired, // Fonction d’animation à fournir
  wrapperClass: PropTypes.string, // Classe CSS pour le wrapper
  sectionClass: PropTypes.string, // Classe CSS pour la section principale
};

export default GsapScrollAnimatedImages;
