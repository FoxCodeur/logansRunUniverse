import React from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import "./ToggleButton.scss";

/**
 * Composant ToggleButton
 * Bouton hamburger/croix animé avec GSAP pour ouvrir/fermer le menu latéral.
 * @param {function} setOpen - fonction pour changer l'état du menu
 * @param {boolean} isOpen - indique si le menu est ouvert
 */
const ToggleButton = ({ setOpen, isOpen }) => {
  // Réfs pour chaque ligne du bouton (SVG)
  const topRef = React.useRef();
  const midRef = React.useRef();
  const botRef = React.useRef();

  // Anime la transformation des lignes du bouton avec GSAP selon l'état ouvert/fermé
  React.useEffect(() => {
    if (isOpen) {
      // Passe en croix
      gsap.to(topRef.current, {
        attr: { d: "M 3 3 L 20 20" },
        duration: 0.25,
      });
      gsap.to(midRef.current, {
        opacity: 0,
        duration: 0.15,
      });
      gsap.to(botRef.current, {
        attr: { d: "M 3 20 L 20 3" },
        duration: 0.25,
      });
    } else {
      // Passe en hamburger
      gsap.to(topRef.current, {
        attr: { d: "M 2 6 L 21 6" },
        duration: 0.25,
      });
      gsap.to(midRef.current, {
        opacity: 1,
        duration: 0.15,
      });
      gsap.to(botRef.current, {
        attr: { d: "M 2 18 L 21 18" },
        duration: 0.25,
      });
    }
  }, [isOpen]);

  // Clique sur le bouton : inverse l'état open/fermé
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <button className="ToggleButtonPortfolio" onClick={handleToggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Ligne du haut */}
        <path
          ref={topRef}
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d={isOpen ? "M 3 3 L 20 20" : "M 2 6 L 21 6"}
        />
        {/* Ligne du milieu */}
        <path
          ref={midRef}
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 12 L 21 12"
          style={{ opacity: isOpen ? 0 : 1, transition: "opacity 0.15s" }}
        />
        {/* Ligne du bas */}
        <path
          ref={botRef}
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d={isOpen ? "M 3 20 L 20 3" : "M 2 18 L 21 18"}
        />
      </svg>
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ToggleButton;
