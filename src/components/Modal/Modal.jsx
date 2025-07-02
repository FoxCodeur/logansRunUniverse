import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";

// Détection stricte du mobile (optimisée)
const isStrictMobile = () => {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const ua = navigator.userAgent || "";
  // Exclut tablettes Android, conserve smartphones Android/iPhone/iPod
  const isMobileUA = /android(?!.*tablet)|iphone|ipod/i.test(ua);
  return isTouch && isSmallScreen && isMobileUA;
};

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);
  const [noAnim, setNoAnim] = useState(false);

  // Effet pour empêcher le scroll du body et gérer le focus
  useEffect(() => {
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  // Effet pour désactiver l'animation sur mobile strict + scroll to top
  useEffect(() => {
    if (!isStrictMobile()) return;

    setNoAnim(true);

    // Scroll to top et s'assure que la modale est visible, même clavier ouvert
    let tries = 0;
    const maxTries = 8;
    const scrollInterval = setInterval(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      modalRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
      tries++;
      if (tries >= maxTries) clearInterval(scrollInterval);
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  // Gestion du clic overlay pour fermeture
  const handleOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  // Empêche la propagation du clic à l'overlay
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={`modal-content${noAnim ? " modal-content--no-anim" : ""}`}
        onClick={stopPropagation}
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
