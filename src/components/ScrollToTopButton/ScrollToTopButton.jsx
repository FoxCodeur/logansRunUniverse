import React from "react";
import PropTypes from "prop-types";
import "./ScrollToTopButton.scss";

/**
 * Un bouton réutilisable qui fait remonter la page tout en haut au clic.
 * Toutes les props supplémentaires sont transmises au bouton HTML.
 *
 * @param {object} props - Props du composant
 * @param {string} [props.className] - Classe CSS supplémentaire
 * @param {function} [props.onClick] - Fonction appelée au clic, en plus du scrollTo
 * @returns {JSX.Element}
 */
const ScrollToTopButton = ({ className = "", onClick, ...props }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e); // Appelle le onClick custom si fourni
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scrollToTopButton ${className}`}
      onClick={handleClick}
      aria-label="Remonter en haut de la page"
      type="button"
      {...props} // transmet toutes les autres props reçues
    >
      {/* Flèche vers le haut */}
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path
          d="M12 19V5M12 5l-7 7M12 5l7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

ScrollToTopButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ScrollToTopButton;
