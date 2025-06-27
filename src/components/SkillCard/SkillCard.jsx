import React from "react";
import PropTypes from "prop-types";
import "./SkillCard.scss";

const SkillCard = ({ icon, title, description }) => (
  <div className="skill-card">
    <div className="skill-card-icon">{icon}</div>
    <h3 className="skill-card-title">{title}</h3>
    <p className="skill-card-description">{description}</p>
  </div>
);

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillCard;
