import React from "react";
import "./Links.scss";
import { motion } from "framer-motion";

// Les variantes pour l'animation du conteneur
const variants = {
  open: {
    // L'état "open" représente l'animation lorsque les éléments sont visibles
    transition: {
      staggerChildren: 0.1, // Le délai de 0,1 seconde entre chaque élément enfant lors de l'apparition
    },
  },
  closed: {
    // L'état "closed" représente l'animation lorsque les éléments disparaissent
    transition: {
      staggerChildren: 0.05, // Le délai de 0,05 seconde entre chaque élément enfant lors de la disparition
      staggerDirection: -1, // L'animation se fait en sens inverse (du dernier élément au premier)
    },
  },
};

// Les variantes pour l'animation de chaque lien
const itemVariants = {
  open: {
    y: 0, // Le lien est à sa position normale sur l'axe Y
    opacity: 1, // Le lien est complètement visible
  },
  closed: {
    y: 50, // Le lien est déplacé de 50 pixels vers le bas sur l'axe Y
    opacity: 0, // Le lien est complètement transparent (invisible)
  },
};

const Links = () => {
  // Déclaration d'un tableau d'éléments pour les liens
  const items = ["Homepage", "Services", "Portfolio", "CV", "About"];

  return (
    <motion.div
      className="links" // Classe CSS pour styliser le conteneur
      initial="closed" // L'état initial est "closed", donc les liens sont en position fermée (invisible)
      animate="open" // Lors du montage, l'état devient "open", déclenchant l'animation d'apparition
      variants={variants} // On applique les variantes définies pour le conteneur
    >
      {items.map((item) => (
        // Utilisation de motion.a pour animer chaque lien
        <motion.a
          href={`#${item}`} // Lien de navigation
          key={item} // Clé unique pour chaque lien
          variants={itemVariants} // Variantes appliquées à chaque lien individuel
          whileHover={{ scale: 1.1 }} // Le lien s'agrandit légèrement lorsqu'on le survole
          whileTap={{ scale: 0.95 }} // Le lien se rétrécit légèrement lorsqu'on clique dessus
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
