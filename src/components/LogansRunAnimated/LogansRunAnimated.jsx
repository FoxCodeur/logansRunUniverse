import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapScrollAnimatedImages from "@/components/GsapScrollAnimatedImages/GsapScrollAnimatedImages";
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

gsap.registerPlugin(ScrollTrigger);

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

const LogansRunAnimated = () => (
  <GsapScrollAnimatedImages
    images={images}
    buildTimeline={buildTimeline}
    wrapperClass="logansrun-animated-wrapper"
    sectionClass="logansrun-animated-section"
  />
);

export default LogansRunAnimated;
