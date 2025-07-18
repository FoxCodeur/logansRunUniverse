import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapScrollAnimatedImages from "@/components/GsapScrollAnimatedImages/GsapScrollAnimatedImages";
import useIsMobile from "@/hooks/useIsMobile"; // Ajout du hook pour gérer l'affichage mobile
import "./LogansRunAnimated.scss";

import backgroundImg from "@/assets/images/portfolioImages/LogansRunBackgroundPortfolio.webp";
import wagonImg from "@/assets/images/portfolioImages/WagonLogansRunPortfolio.png";
import logan5Img from "@/assets/images/portfolioImages/Logan5Portfolio.png";
import francisImg from "@/assets/images/portfolioImages/FrancisLogansRunPortfolio.png";
import jessica6Img from "@/assets/images/portfolioImages/Jessica6Portfolio.png";
import revolverImg from "@/assets/images/portfolioImages/RevolverLogansRunPortfolio.png";
import laserImg from "@/assets/images/portfolioImages/LaserPortfolio.webp";
import titreImg from "@/assets/images/portfolioImages/TitreLogansRunPortfolio.png";
import afficheImg from "@/assets/images/portfolioImages/AfficheLogansRunPortfolio.png";

// Enregistre le plugin ScrollTrigger pour GSAP (nécessaire pour les animations déclenchées au scroll)
gsap.registerPlugin(ScrollTrigger);

/**
 * Tableau d'objets représentant les images à animer dans la section parallax.
 * Chaque objet contient:
 *  - refName: nom de la référence React pour cibler l'image dans l'animation
 *  - src: source de l'image
 *  - alt: texte alternatif pour l'accessibilité
 *  - className: classe CSS personnalisée pour le style/placement
 */
const images = [
  {
    refName: "backgroundRef",
    src: backgroundImg,
    alt: "Futuristic city background",
    className: "logansrun-bg",
  },
  {
    refName: "wagonRef",
    src: wagonImg,
    alt: "Wagon",
    className: "logansrun-wagon",
  },
  {
    refName: "logan5Ref",
    src: logan5Img,
    alt: "Logan 5",
    className: "logansrun-logan5",
  },
  {
    refName: "francisRef",
    src: francisImg,
    alt: "Francis",
    className: "logansrun-francis",
  },
  {
    refName: "jessica6Ref",
    src: jessica6Img,
    alt: "Jessica 6",
    className: "logansrun-jessica6",
  },
  {
    refName: "revolverRef",
    src: revolverImg,
    alt: "Revolver",
    className: "logansrun-revolver",
  },
  {
    refName: "laserRef",
    src: laserImg,
    alt: "Laser",
    className: "logansrun-laser",
  },
  {
    refName: "titreRef",
    src: titreImg,
    alt: "Titre Logan's Run",
    className: "logansrun-titre",
  },
  {
    refName: "afficheRef",
    src: afficheImg,
    alt: "Affiche Logan's Run",
    className: "logansrun-affiche",
  },
];

/**
 * Fonction qui construit la timeline d'animations GSAP pour les images du composant.
 * - refs: objets contenant les références React de chaque image (passées automatiquement)
 * - sectionRef: référence de la section parallax (pour déclencher l'animation au scroll)
 */
const buildTimeline = (refs, sectionRef) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });
  tl.fromTo(
    refs.wagonRef.current,
    { x: 0, opacity: 1 },
    { x: "100vw", duration: 2.5, opacity: 0, ease: "power2.inOut" }
  )
    .fromTo(
      refs.logan5Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "+=0.2"
    )
    .fromTo(
      refs.francisRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.4"
    )
    .fromTo(
      refs.jessica6Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.3"
    )
    .fromTo(
      refs.revolverRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
      "+=0.3"
    )
    .fromTo(
      refs.laserRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
    )
    .to(
      refs.laserRef.current,
      { x: "58vw", opacity: 0, duration: 1.8, ease: "power2.in" },
      "+=0.2"
    )
    .fromTo(
      refs.titreRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "+=0.3"
    )
    .to(
      refs.jessica6Ref.current,
      { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
      "+=0.6"
    )
    .to(
      refs.francisRef.current,
      { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
      "-=0.4"
    )
    .to(
      refs.logan5Ref.current,
      { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
      "-=0.4"
    )
    .to(
      refs.revolverRef.current,
      { opacity: 0, x: 50, duration: 0.7, ease: "power2.in" },
      "-=0.5"
    )
    .to(refs.laserRef.current, { opacity: 0, duration: 0.4 }, "-=0.5")
    .fromTo(
      refs.afficheRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "back.out(1.7)" },
      "+=0.3"
    );
};

/**
 * Composant principal qui affiche la scène animée de Logan's Run.
 * Il délègue l'affichage et les refs à GsapScrollAnimatedImages,
 * et passe la timeline d'animation à appliquer.
 * Ajoute un titre explicatif sous la section d'animation.
 */
const LogansRunAnimated = () => {
  const isMobile = useIsMobile(1366); // On masque pour mobile et tablettes

  if (isMobile) return null; // N'affiche rien sur mobile/tablette

  return (
    <div>
      <GsapScrollAnimatedImages
        images={images}
        buildTimeline={buildTimeline}
        wrapperClass="logansrun-animated-wrapper"
        sectionClass="logansrun-animated-section"
      />
      {/* Titre explicatif sous la scène animée */}
      <h2 className="logansrun-title">Logan's Run</h2>
    </div>
  );
};

export default LogansRunAnimated;
