import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapScrollAnimatedImages from "@/components/GsapScrollAnimatedImages/GsapScrollAnimatedImages";
import useIsMobile from "@/hooks/useIsMobile"; // Hook pour gérer l'affichage mobile
import "./Parallax1.scss";

import portfolioRoadWarrior from "@/assets/images/portfolioImages/portfolioRoadWarrior.png";
import portfolioInterceptor from "@/assets/images/portfolioImages/portfolioInterceptor.png";
import portfolioBigBoss from "@/assets/images/portfolioImages/portfolioBigBoss.webp";
import portfolioVexxel from "@/assets/images/portfolioImages/portfolioVexxel.webp";
import portfolioLogo from "@/assets/images/portfolioImages/portfolioLogo.png";
import portfolioGutz from "@/assets/images/portfolioImages/portfolioGutz.png";
import portfolioSkarr from "@/assets/images/portfolioImages/portfolioSkarr.png";
import portfolioNyx from "@/assets/images/portfolioImages/portfolioNyx.png";

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
    refName: "roadWarriorRef",
    src: portfolioRoadWarrior,
    alt: "Road Warrior",
    className: "parallax-bg",
  },
  {
    refName: "interceptorRef",
    src: portfolioInterceptor,
    alt: "Interceptor",
    className: "parallax-interceptor",
  },
  {
    refName: "logoRef",
    src: portfolioLogo,
    alt: "Logo",
    className: "parallax-logo",
  },
  {
    refName: "bigbossRef",
    src: portfolioBigBoss,
    alt: "Effet de fondu",
    className: "parallax-mask",
  },
  {
    refName: "vexxelRef",
    src: portfolioVexxel,
    alt: "Vexxel Illu",
    className: "parallax-mask-vexxel",
  },
  {
    refName: "gutzRef",
    src: portfolioGutz,
    alt: "Gutz",
    className: "parallax-gutz",
  },
  {
    refName: "skarrRef",
    src: portfolioSkarr,
    alt: "Skarr",
    className: "parallax-skarr",
  },
  {
    refName: "nyxRef",
    src: portfolioNyx,
    alt: "Nyx",
    className: "parallax-nyx",
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
  // Enchaînement des animations sur chaque image
  tl.fromTo(
    refs.interceptorRef.current,
    { x: 0, opacity: 1 },
    { x: "100vw", duration: 3, opacity: 0, ease: "power2.inOut" }
  )
    .fromTo(
      refs.logoRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "+=0.2"
    )
    .fromTo(
      refs.gutzRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.4"
    )
    .fromTo(
      refs.skarrRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.3"
    )
    .fromTo(
      refs.nyxRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.3"
    )
    .fromTo(
      refs.bigbossRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: "power1.inOut" },
      "+=0.3"
    )
    .fromTo(
      refs.vexxelRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: "power1.inOut" },
      "<"
    );
};

/**
 * Composant principal qui affiche la section Parallax1 avec les images animées.
 * Il délègue l'affichage et les refs à GsapScrollAnimatedImages,
 * et passe la timeline d'animation à appliquer.
 * Ajoute un titre explicatif sous la section d'animation.
 */
const Parallax1 = () => {
  const isMobile = useIsMobile(1366); // On masque pour mobile et tablettes

  if (isMobile) return null; // N'affiche rien sur mobile/tablette

  return (
    <div>
      <GsapScrollAnimatedImages
        images={images}
        buildTimeline={buildTimeline}
        wrapperClass="parallax1-wrapper"
        sectionClass="parallax1-section"
      />
      {/* Titre explicatif sous la parallax */}
      <h2 className="parallax1-title">Le Combattant de l'Autoroute</h2>
    </div>
  );
};

export default Parallax1;
