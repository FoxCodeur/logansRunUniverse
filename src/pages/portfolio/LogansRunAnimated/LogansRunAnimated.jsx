import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LogansRunAnimated.scss";

import backgroundImg from "@/assets/images/portfolioImages/LogansRunBackgroundPortfolio.webp";
import wagonImg from "@/assets/images/portfolioImages/WagonLogansRunPortfolio.png";
import logan5Img from "@/assets/images/portfolioImages/Logan5Portfolio.png";
import francisImg from "@/assets/images/portfolioImages/FrancisLogansRunPortfolio.png";
import jessica6Img from "@/assets/images/portfolioImages/Jessica6Portfolio.png";
import revolverImg from "@/assets/images/portfolioImages/RevolverLogansRunPortfolio.png";
// import laserImg from "@/assets/images/portfolioImages/LaserLogansRunPortfolio.png"; // SUPPRIMÉ
import titreImg from "@/assets/images/portfolioImages/TitreLogansRunPortfolio.png";
import afficheImg from "@/assets/images/portfolioImages/AfficheLogansRunPortfolio.png";

/*
  ===== EXPLICATIONS SUR LA GESTION DE L'ANIMATION =====

  1. Références React (useRef)
     - Chaque image animée a son propre ref (wagonRef, logan5Ref, etc.)
     - Permet de cibler et manipuler chaque élément DOM précisément via GSAP.

  2. ScrollTrigger
     - GSAP + ScrollTrigger permet de déclencher la timeline d'animations
       quand la section est visible à 70% du viewport (start: "top 70%").
     - Le composant gsap.context() gère le scope pour éviter les fuites de références.

  3. Timeline GSAP
     - Chaque .fromTo ou .to correspond à une étape de l’animation :
         - Apparition (opacity: 0 -> 1, scale, translation, etc.)
         - Disparition (opacity: 1 -> 0, translation x/y)
         - "x" et "y" déplacent horizontalement ou verticalement
         - "scale" gère un effet de zoom/miniaturisation
         - "duration" règle la durée de chaque animation
         - "ease" gère la courbe d’accélération (effet rebond, etc.)
     - Le paramètre "+=0.x" décale une animation dans le temps
     - Le paramètre "-=0.x" fait démarrer une animation avant la fin de la précédente
     - Les animations sont jouées dans l’ordre de la timeline.

  4. Nettoyage
     - ctx.revert() nettoie tous les effets GSAP lorsque le composant est démonté.

  5. Positionnement & Styles
     - Le positionnement, la taille et l’opacité initiale des images sont gérés dans le fichier SCSS associé.
     - Les images sont en position absolute dans la section animée.

  6. Pour personnaliser
     - Modifie les valeurs x, y, scale, opacity, duration, ease et l'ordre dans la timeline.
     - Ajoute ou enlève des étapes à la timeline pour changer la scène.

  7. Ressources utiles
     - https://greensock.com/docs/v3/GSAP/Timeline
     - https://greensock.com/docs/v3/Plugins/ScrollTrigger

  Orchestration schématique :
    [Section visible (scroll)]
       |
       v
    [Wagon traverse de gauche à droite & disparaît]
       |
       v
    [Logan5, Francis, Jessica6 apparaissent successivement]
       |
       v
    [Revolver apparaît]
       |
       v
    [Titre apparaît, personnages disparaissent, Affiche apparaît]
*/

gsap.registerPlugin(ScrollTrigger);

const LogansRunAnimated = () => {
  // Refs pour chaque image animée
  const sectionRef = useRef(null);
  const wagonRef = useRef(null);
  const logan5Ref = useRef(null);
  const francisRef = useRef(null);
  const jessica6Ref = useRef(null);
  const revolverRef = useRef(null);
  // const laserRef = useRef(null); // SUPPRIMÉ
  const titreRef = useRef(null);
  const afficheRef = useRef(null);

  useEffect(() => {
    // Contexte GSAP pour éviter les fuites de références
    const ctx = gsap.context(() => {
      // Timeline principale, liée au scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animation du wagon : traverse la scène de gauche à droite et disparaît
      tl.fromTo(
        wagonRef.current,
        { x: 0, opacity: 1 },
        { x: "100vw", duration: 2.5, opacity: 0, ease: "power2.inOut" }
      )
        // Logan5 apparaît, effet de zoom et fade-in
        .fromTo(
          logan5Ref.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.2"
        )
        // Francis apparaît, translation verticale et fade-in
        .fromTo(
          francisRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.4"
        )
        // Jessica6 apparaît, translation verticale et fade-in
        .fromTo(
          jessica6Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Revolver apparaît, translation horizontale et fade-in
        .fromTo(
          revolverRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
          "+=0.3"
        )
        // SUPPRIMER les animations laser :
        // // Laser apparaît, translation horizontale et fade-in
        // .fromTo(
        //   laserRef.current,
        //   { opacity: 0, x: -80 },
        //   { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
        // )
        // // Laser traverse la scène vers la droite et disparaît
        // .to(
        //   laserRef.current,
        //   { x: "100vw", opacity: 0, duration: 1.2, ease: "power2.in" },
        //   "+=0.2"
        // )
        // // Laser disparaît complètement (sécurité)
        // .to(laserRef.current, { opacity: 0, duration: 0.4 }, "-=0.5")
        // Titre apparaît, effet de zoom et fade-in
        .fromTo(
          titreRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.3"
        )
        // Les personnages disparaissent progressivement vers le haut
        .to(
          francisRef.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "+=0.6"
        )
        .to(
          logan5Ref.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "-=0.4"
        )
        .to(
          jessica6Ref.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "-=0.4"
        )
        // Revolver disparaît vers la droite
        .to(
          revolverRef.current,
          { opacity: 0, x: 50, duration: 0.7, ease: "power2.in" },
          "-=0.5"
        )
        // Affiche apparaît, effet de zoom et fade-in
        .fromTo(
          afficheRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.3"
        );
    }, sectionRef);

    // Nettoyage GSAP à la destruction du composant
    return () => ctx.revert();
  }, []);

  return (
    <div className="logansrun-animated-wrapper">
      <section className="logansrun-animated-section" ref={sectionRef}>
        <div className="background-container">
          <img
            src={backgroundImg}
            alt="Futuristic city background"
            className="logansrun-bg"
            draggable="false"
          />
        </div>

        {/* Images animées, chaque ref sert à l'animation GSAP */}
        <img
          src={wagonImg}
          alt="Wagon"
          className="logansrun-wagon"
          ref={wagonRef}
          draggable="false"
        />
        <img
          src={logan5Img}
          alt="Logan 5"
          className="logansrun-logan5"
          ref={logan5Ref}
          draggable="false"
        />
        <img
          src={francisImg}
          alt="Francis"
          className="logansrun-francis"
          ref={francisRef}
          draggable="false"
        />
        <img
          src={jessica6Img}
          alt="Jessica 6"
          className="logansrun-jessica6"
          ref={jessica6Ref}
          draggable="false"
        />
        <img
          src={revolverImg}
          alt="Revolver"
          className="logansrun-revolver"
          ref={revolverRef}
          draggable="false"
        />
        {/* <img
          src={laserImg}
          alt="Laser"
          className="logansrun-laser"
          ref={laserRef}
          draggable="false"
        /> */}
        <img
          src={titreImg}
          alt="Titre Logan's Run"
          className="logansrun-titre"
          ref={titreRef}
          draggable="false"
        />
        <img
          src={afficheImg}
          alt="Affiche Logan's Run"
          className="logansrun-affiche"
          ref={afficheRef}
          draggable="false"
        />
      </section>
    </div>
  );
};

export default LogansRunAnimated;
