import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const PetiteGuerre = () => {
  const petiteguerreData = data.P ? data.P["Petite guerre"] : null;

  if (!petiteguerreData) {
    return <div>Les données pour Petite guerre ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="P" keyName="Petite guerre" />
    </div>
  );
};

export default PetiteGuerre;
