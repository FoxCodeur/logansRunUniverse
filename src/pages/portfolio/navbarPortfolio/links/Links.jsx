import React, { useRef, useEffect } from "react";
import "./Links.scss";
import gsap from "gsap";

// Liste des éléments de navigation (leurs noms doivent correspondre aux ids des sections de la page)
const items = ["Homepage", "Competences", "Portfolio", "CV"];

/**
 * Composant Links
 * Affiche les liens de navigation et anime leur apparition/disparition avec GSAP.
 * @param {boolean} isOpen - indique si le menu est ouvert
 */
const Links = ({ isOpen }) => {
  // Références vers chaque élément <a> pour GSAP
  const linksRef = useRef([]);
  // Référence vers le conteneur principal
  const containerRef = useRef();

  // Effet qui s'exécute à chaque changement de isOpen
  useEffect(() => {
    if (isOpen) {
      // Active les pointer-events pour rendre les liens cliquables
      gsap.to(containerRef.current, { pointerEvents: "auto" });
      // Anime chaque lien vers le haut et rend visible (apparition en décalé)
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1, // délai entre chaque lien
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      // Anime chaque lien vers le bas et rend invisible (disparition en décalé)
      gsap.to(linksRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power3.in",
      });
      // Désactive les pointer-events après l'animation
      gsap.to(containerRef.current, { pointerEvents: "none", delay: 0.3 });
    }
  }, [isOpen]);

  return (
    <div className="links" ref={containerRef}>
      {items.map((item, i) => (
        <a
          // On stocke chaque ref dans un tableau pour pouvoir les cibler individuellement avec GSAP
          ref={(el) => (linksRef.current[i] = el)}
          href={`#${item}`}
          key={item}
          tabIndex={isOpen ? 0 : -1} // Accessibilité : tabulation seulement si ouvert
          style={{
            display: "block",
            opacity: 0, // état initial invisible
            transform: "translateY(50px)", // état initial décalé vers le bas
          }}
          // Animations au survol et au clic avec GSAP (scale)
          onMouseEnter={() =>
            gsap.to(linksRef.current[i], { scale: 1.1, duration: 0.15 })
          }
          onMouseLeave={() =>
            gsap.to(linksRef.current[i], { scale: 1, duration: 0.15 })
          }
          onMouseDown={() =>
            gsap.to(linksRef.current[i], { scale: 0.95, duration: 0.1 })
          }
          onMouseUp={() =>
            gsap.to(linksRef.current[i], { scale: 1.1, duration: 0.1 })
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
