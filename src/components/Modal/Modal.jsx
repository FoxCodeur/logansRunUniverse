import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";

/**
 * Détection stricte du mobile :
 * - Vérifie la présence de fonctionnalités tactiles (touch events ou points tactiles)
 * - Vérifie que la largeur de l'écran est <= 600px
 * - Analyse le user agent pour ne retenir que Android/iPhone/iPod (exclut tablettes)
 * (N'utilise pas de propriété dépréciée)
 */
const isStrictMobile = () => {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const ua = navigator.userAgent || "";
  // Exclut les tablettes Android, ne garde que les smartphones Android/iPhone/iPod
  const isMobileUA = /android(?!.*tablet)|iphone|ipod/i.test(ua);
  return isTouch && isSmallScreen && isMobileUA;
};

/**
 * Composant Modal :
 * - Affiche une fenêtre modale superposée au reste de l'interface
 * - Gère le scroll du body et l'animation d'apparition selon le device
 * - Ferme la modale sur clic overlay ou bouton croix
 */
const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);
  const [noAnim, setNoAnim] = useState(false);

  useEffect(() => {
    // Si mobile strict, désactive l'animation d'apparition
    if (isStrictMobile()) setNoAnim(true);

    // Empêche le scroll du body quand la modale est ouverte
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    // Sur mobile strict, force le scroll en haut pour s'assurer que la modale est bien visible
    let interval;
    if (isStrictMobile()) {
      let count = 0;
      const maxTries = 8;
      interval = setInterval(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ block: "start", behavior: "auto" });
        }
        count++;
        if (count >= maxTries) clearInterval(interval);
      }, 50);
    }

    // Nettoyage à la fermeture de la modale
    return () => {
      if (interval) clearInterval(interval);
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  // Affiche la modale en utilisant un portail React dans le body
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className={`modal-content${noAnim ? " modal-content--no-anim" : ""}`}
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la modale
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
