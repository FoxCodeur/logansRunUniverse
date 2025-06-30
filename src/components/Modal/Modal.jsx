import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";

// Remonte UNIQUEMENT sur smartphone (Android, iPhone)
const isStrictMobile = () => {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  // On exclut iPad/tablettes et ne prend que Android/iPhone/iPod
  const isMobileUA = /android(?!.*tablet)|iphone|ipod/i.test(ua);
  return isTouch && isSmallScreen && isMobileUA;
};

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    // Forcer le scroll en haut UNIQUEMENT sur smartphone
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

    return () => {
      if (interval) clearInterval(interval);
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
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
