import React, { useState, useRef, useEffect } from "react";
import "./SidebarPortfolio.scss";
import ToggleButton from "../toggleButton/ToggleButton";
import Links from "../links/Links";
import gsap from "gsap";

/**
 * Composant SidebarPortfolio
 * Affiche le menu latéral animé (ouvert/fermé) et le bouton toggle.
 */
const SidebarPortfolio = () => {
  const [open, setOpen] = useState(false); // état du menu (ouvert/fermé)
  const bgRef = useRef(); // ref pour le fond animé (clipPath)

  // Anime le fond rond du menu latéral avec GSAP lors de l'ouverture/fermeture
  useEffect(() => {
    if (open) {
      gsap.to(bgRef.current, {
        clipPath: "circle(1200px at 50px 50px)", // Grand cercle pour ouverture
        zIndex: 20,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(bgRef.current, {
        clipPath: "circle(30px at 50px 50px)", // Petit cercle pour fermeture
        zIndex: 0,
        duration: 1,
        ease: "power2.in",
        delay: 0.3, // attend la disparition des liens avant de réduire le fond
      });
    }
  }, [open]);

  return (
    <div className="sidebarPortfolio">
      <div className="bg" ref={bgRef}>
        {/* Les liens du menu, animés avec GSAP */}
        <Links isOpen={open} />
      </div>
      {/* Le bouton toggle pour ouvrir/fermer le menu */}
      <ToggleButton setOpen={setOpen} isOpen={open} />
    </div>
  );
};

export default SidebarPortfolio;
