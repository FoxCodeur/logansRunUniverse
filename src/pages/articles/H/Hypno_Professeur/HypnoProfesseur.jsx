import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const HypnoProfesseur = () => {
  const hypnoprofesseurData = data.H ? data.H["Hypno professeur"] : null;

  if (!hypnoprofesseurData) {
    return (
      <div>Les données pour Hypno professeur ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="H" keyName="Hypno professeur" />
    </div>
  );
};

export default HypnoProfesseur;
