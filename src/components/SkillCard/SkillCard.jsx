import React from "react";
import PropTypes from "prop-types";
import "./SkillCard.scss";

/**
 * SkillCard
 * Composant réutilisable qui affiche une compétence sous forme de carte avec une icône, un titre et une description.
 *
 * Props :
 * - icon        : Élément React représentant l'icône de la compétence (obligatoire)
 * - title       : Titre de la compétence (obligatoire)
 * - description : Courte description de la compétence (obligatoire)
 */
const SkillCard = ({ icon, title, description }) => (
  <div className="skill-card">
    {/* Affiche l'icône de la compétence */}
    <div className="skill-card-icon">{icon}</div>
    {/* Affiche le titre de la compétence */}
    <h3 className="skill-card-title">{title}</h3>
    {/* Affiche la description de la compétence */}
    <p className="skill-card-description">{description}</p>
  </div>
);

// Définition des types des props pour sécuriser l'utilisation du composant
SkillCard.propTypes = {
  icon: PropTypes.node.isRequired, // Une icône React obligatoire
  title: PropTypes.string.isRequired, // Un titre obligatoire
  description: PropTypes.string.isRequired, // Une description obligatoire
};

export default SkillCard;
