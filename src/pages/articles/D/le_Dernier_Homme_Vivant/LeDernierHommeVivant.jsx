import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeDernierHommeVivant = () => {
  const dernierHommeData = data.D ? data.D["Dernier Homme Vivant"] : null;

  if (!dernierHommeData) {
    return (
      <div>
        Les données pour le dernier homme vivant ne sont pas disponibles.
      </div>
    );
  }

  return (
    <div>
      <Definition
        titre={dernierHommeData.titre}
        image={dernierHommeData.image}
        rubriques={dernierHommeData.rubriques}
      />
    </div>
  );
};

export default LeDernierHommeVivant;
