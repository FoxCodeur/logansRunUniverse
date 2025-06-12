import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Parallax1.scss";

import portfolioRoadWarrior from "../../../assets/images/portfolioImages/portfolioRoadWarrior.png";
import portfolioInterceptor from "../../../assets/images/portfolioImages/portfolioInterceptor.png";
import portfolioLogo from "../../../assets/images/portfolioImages/portfolioLogo.png";
import portfolioGutz from "../../../assets/images/portfolioImages/portfolioGutz.png";
import portfolioSkarr from "../../../assets/images/portfolioImages/portfolioSkarr.png";
import portfolioNyx from "../../../assets/images/portfolioImages/portfolioNyx.png";

gsap.registerPlugin(ScrollTrigger);

const Parallax1 = () => {
  const sectionRef = useRef(null);
  const interceptorRef = useRef(null);
  const logoRef = useRef(null);
  const gutzRef = useRef(null);
  const skarrRef = useRef(null);
  const nyxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Interceptor (voiture) sort à droite, moins vite (3s)
      tl.fromTo(
        interceptorRef.current,
        { x: 0, opacity: 1 },
        { x: "100vw", duration: 3, opacity: 0, ease: "power2.inOut" }
      )
        // Logo apparaît APRES la voiture (décalé)
        .fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "+=0.2" // petit délai après l'animation voiture
        )
        // Gutz apparaît ensuite, décalé
        .fromTo(
          gutzRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.4"
        )
        // Skarr ensuite
        .fromTo(
          skarrRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Nyx en dernier
        .fromTo(
          nyxRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax1-wrapper">
      <section className="parallax1-section" ref={sectionRef}>
        <img
          src={portfolioRoadWarrior}
          alt="Road Warrior"
          className="parallax-bg"
          draggable="false"
        />

        <img
          src={portfolioInterceptor}
          alt="Interceptor"
          className="parallax-interceptor"
          ref={interceptorRef}
          draggable="false"
        />

        <img
          src={portfolioLogo}
          alt="Logo"
          className="parallax-logo"
          ref={logoRef}
          draggable="false"
        />

        <img
          src={portfolioGutz}
          alt="Gutz"
          className="parallax-gutz"
          ref={gutzRef}
          draggable="false"
        />
        <img
          src={portfolioSkarr}
          alt="Skarr"
          className="parallax-skarr"
          ref={skarrRef}
          draggable="false"
        />
        <img
          src={portfolioNyx}
          alt="Nyx"
          className="parallax-nyx"
          ref={nyxRef}
          draggable="false"
        />
      </section>
    </div>
  );
};

export default Parallax1;
