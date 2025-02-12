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
      <Definition section="D" keyName="Dernier Homme Vivant" />
    </div>
  );
};

export default LeDernierHommeVivant;
