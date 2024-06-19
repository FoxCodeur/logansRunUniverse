import React from "react";
import Definition from "../../Definition";
import data from "../../../../data.json";
// on crée un composant générique vers lequel toutes les définitions vont se rediriger
const Acteurs = () => {
  const acteursData = data.A["acteurs du film"];
  if (!acteursData) {
    return <div>Les données pour Aigle Mécha ne sont pas disponibles.</div>;
  }
  return (
    <Definition
      titre={acteursData.titre}
      image={acteursData.image}
      rubriques={acteursData.rubriques}
    />
  );
};

export default Acteurs;
