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
      <Definition
        titre={petiteguerreData.titre}
        image={petiteguerreData.image}
        rubriques={petiteguerreData.rubriques}
      />
    </div>
  );
};

export default PetiteGuerre;
