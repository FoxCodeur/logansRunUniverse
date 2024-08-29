import React, { useState } from "react";
import PropTypes from "prop-types";
// bibliothèque qui permet de gérer les animations dans REACT
import { motion } from "framer-motion";
import "./ToggleButton.scss";
// Ce composant ToggleButton est un bouton qui permet de basculer entre deux états
// visuels : un "hamburger" menu (trois lignes horizontales) et une "croix"
//(deux lignes diagonales). Lorsqu'on clique sur le bouton, il bascule entre ces
//deux formes. On utilise la bibliothèque framer-motion pour animer ces transitions
//de manière fluide.

const ToggleButton = ({ setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setOpen((prev) => !prev);
  };

  return (
    <button className="ToggleButtonPortfolio" onClick={handleToggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top line */}
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 6 L 21 6" }, // Hamburger state
            open: { d: "M 3 3 L 20 20" }, // Cross state (top-left to bottom-right)
          }}
        />
        {/* Middle line */}
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1, d: "M 2 12 L 21 12" }, // Hamburger state
            open: { opacity: 0 }, // Hidden in cross state
          }}
          transition={{ duration: 0.1 }} // Quick transition for opacity
        />
        {/* Bottom line */}
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 18 L 21 18" }, // Hamburger state
            open: { d: "M 3 20 L 20 3" }, // Cross state (bottom-left to top-right)
          }}
        />
      </svg>
    </button>
  );
};

// les props
ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
