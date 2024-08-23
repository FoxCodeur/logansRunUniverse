import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SidebarPortfolio.scss";
import ToggleButton from "../toggleButton/ToggleButton";
import Links from "../links/Links";
// Si variants doit être utilisé par d'autres composants ou fonctions dans le même
// fichier, il est logique de le définir en dehors du composant pour le rendre
// accessible.
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)", // Corrected clipPath with proper syntax
    transition: {
      type: "spring",
      stiffness: 20, // Fixed typo in 'stiffness'
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)", // Corrected clipPath with proper syntax
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400, // Fixed typo in 'stiffness'
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
