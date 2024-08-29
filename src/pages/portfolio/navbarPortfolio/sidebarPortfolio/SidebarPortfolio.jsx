import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SidebarPortfolio.scss";
import ToggleButton from "../toggleButton/ToggleButton";
import Links from "../links/Links";

// Définition des variantes pour le composant SidebarPortfolio
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    zIndex: 20, // Ajout du z-index pour l'état ouvert
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    zIndex: 0, // Valeur par défaut pour l'état fermé
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SidebarPortfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebarPortfolio" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SidebarPortfolio;
