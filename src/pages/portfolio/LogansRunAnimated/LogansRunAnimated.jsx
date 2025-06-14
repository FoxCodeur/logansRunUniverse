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
import laserImg from "@/assets/images/portfolioImages/LaserPortfolio.png";
import titreImg from "@/assets/images/portfolioImages/TitreLogansRunPortfolio.png";
import afficheImg from "@/assets/images/portfolioImages/AfficheLogansRunPortfolio.png";

gsap.registerPlugin(ScrollTrigger);

const LogansRunAnimated = () => {
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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        wagonRef.current,
        { x: 0, opacity: 1 },
        { x: "100vw", duration: 2.5, opacity: 0, ease: "power2.inOut" }
      )
        .fromTo(
          logan5Ref.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.2"
        )
        .fromTo(
          francisRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.4"
        )
        .fromTo(
          jessica6Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        .fromTo(
          revolverRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
          "+=0.3"
        )
        .fromTo(
          laserRef.current,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
        )
        .to(
          laserRef.current,
          { x: "100vw", opacity: 0, duration: 1.2, ease: "power2.in" },
          "+=0.2"
        )
        .fromTo(
          titreRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.3"
        )
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
        .to(
          revolverRef.current,
          { opacity: 0, x: 50, duration: 0.7, ease: "power2.in" },
          "-=0.5"
        )
        .to(laserRef.current, { opacity: 0, duration: 0.4 }, "-=0.5")
        .fromTo(
          afficheRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.3"
        );
    }, sectionRef);

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
