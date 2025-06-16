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
import laserImg from "@/assets/images/portfolioImages/LaserPortfolio.webp";
import titreImg from "@/assets/images/portfolioImages/TitreLogansRunPortfolio.png";
import afficheImg from "@/assets/images/portfolioImages/AfficheLogansRunPortfolio.png";

/*
  Ce composant orchestre une animation complexe avec GSAP et ScrollTrigger.
  Chaque image a sa référence (ref) pour l'animer individuellement.
*/

gsap.registerPlugin(ScrollTrigger);

const LogansRunAnimated = () => {
  // Références pour chaque image animée
  const sectionRef = useRef(null);
  const wagonRef = useRef(null);
  const logan5Ref = useRef(null);
  const francisRef = useRef(null);
  const jessica6Ref = useRef(null);
  const revolverRef = useRef(null);
  const laserRef = useRef(null);
  const titreRef = useRef(null);
  const afficheRef = useRef(null);

  useEffect(() => {
    // On crée un contexte GSAP pour éviter les fuites de références
    const ctx = gsap.context(() => {
      // La timeline principale, déclenchée quand la section est à 70% du viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Quand le haut de la section atteint 70% du viewport
          toggleActions: "play none none none", // Joue l'animation une seule fois
        },
      });

      // 1. WAGON : Traverse de gauche à droite et disparaît
      tl.fromTo(
        wagonRef.current, // Élément ciblé
        { x: 0, opacity: 1 }, // Départ : position normale, visible
        { x: "100vw", duration: 2.5, opacity: 0, ease: "power2.inOut" }
        // Arrivée : sort de l'écran à droite, disparaît en 2.5s avec une courbe douce
        // À modifier :
        //   - x : déplacement horizontal (ex: "80vw" va moins loin)
        //   - duration : durée du déplacement
        //   - opacity : 0 pour disparaître, 1 pour rester visible
        //   - ease : type de courbe d'accélération (ex: "linear", "bounce", ...)
      )
        // 2. LOGAN5 : Apparaît avec effet de zoom et fondu
        .fromTo(
          logan5Ref.current,
          { opacity: 0, scale: 0.8 }, // Départ : invisible et petit
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }, // Arrivée : visible, taille normale, effet rebond
          "+=0.2" // Commence 0.2s après la fin de l'étape précédente
          // À modifier :
          //   - opacity (0→1) pour le fondu
          //   - scale (zoom)
          //   - duration (vitesse)
          //   - ease ("back.out" pour rebond, "power1.out" pour plus linéaire)
          //   - "+=0.2" : délai après l'étape précédente ("-=0.2" pour chevaucher, "0" pour enchaîner)
        )
        // 3. FRANCIS : Apparaît du bas vers le haut avec fondu
        .fromTo(
          francisRef.current,
          { opacity: 0, y: 50 }, // Départ : invisible, décalé de 50px vers le bas
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.4"
          // À modifier :
          //   - y : décalage vertical de départ
          //   - duration : vitesse
          //   - ease : courbe
          //   - "+=0.4" : délai après l'étape précédente
        )
        // 4. JESSICA6 : Même principe que Francis
        .fromTo(
          jessica6Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // 5. REVOLVER : Apparaît en glissant de la gauche
        .fromTo(
          revolverRef.current,
          { opacity: 0, x: -50 }, // Départ : invisible, décalé de -50px à gauche
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
          "+=0.3"
          // À modifier :
          //   - x : décalage horizontal de départ
        )
        // 6. LASER : Apparaît, glisse un peu vers la droite
        .fromTo(
          laserRef.current,
          { opacity: 0, x: -80 }, // Départ : invisible, décalé à gauche
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          // À modifier :
          //   - x : décalage horizontal de départ
          //   - duration : vitesse d'apparition
          //   - ease : courbe d'arrivée
        )
        // 7. LASER : Traverse l'écran vers la droite et disparaît
        .to(
          laserRef.current,
          { x: "58vw", opacity: 0, duration: 1.8, ease: "power2.in" },
          "+=0.2"
          // x: "100vw" = traverse tout l'écran à droite
          // opacity: 0 = disparition progressive
          // duration: temps du trajet
          // "+=0.2" = délai après la fin de l'animation précédente
        )
        // 8. TITRE : Apparaît avec effet de zoom et fondu
        .fromTo(
          titreRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.3"
          // Même principes qu'avant
        )
        // 9. JESSICA6 : Disparaît vers le haut (en premier)
        .to(
          jessica6Ref.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "+=0.6"
          // y: -40 = monte de 40px
          // opacity: 0 = disparaît
          // duration : rapidité de disparition
          // "+=0.6" : délai après l'étape précédente
        )
        // 10. FRANCIS : Disparaît vers le haut, chevauche la disparition de Jessica6
        .to(
          francisRef.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "-=0.4"
          // "-=0.4" = commence 0.4s avant la fin de la disparition de Jessica6 (effet de chevauchement)
        )
        // 11. LOGAN5 : Disparaît vers le haut, chevauche la disparition de Francis
        .to(
          logan5Ref.current,
          { opacity: 0, y: -40, duration: 0.7, ease: "power2.in" },
          "-=0.4"
          // "-=0.4" = commence 0.4s avant la fin de la disparition de Francis (effet de chevauchement)
        )
        // 12. REVOLVER : Disparaît vers la droite, chevauche la disparition des persos
        .to(
          revolverRef.current,
          { opacity: 0, x: 50, duration: 0.7, ease: "power2.in" },
          "-=0.5"
          // x: 50 = décale de 50px à droite
        )
        // 13. LASER : Disparaît totalement (sécurité pour éviter bug visuel)
        .to(
          laserRef.current,
          { opacity: 0, duration: 0.4 },
          "-=0.5"
          // opacity: 0 = s'assure que le laser est bien invisible
          // duration: rapidité de la disparition
        )
        // 14. AFFICHE : Apparaît avec effet de zoom et fondu
        .fromTo(
          afficheRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "back.out(1.7)" },
          "+=0.3"
          // Dernière étape: l'affiche prend la place avec un zoom et un fondu
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
        <img
          src={laserImg}
          alt="Laser"
          className="logansrun-laser"
          ref={laserRef}
          draggable="false"
        />
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
