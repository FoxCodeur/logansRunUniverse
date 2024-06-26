import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const MaisonDeVerre = () => {
  const maisondeVerreData = data.M ? data.M["Maison de verre"] : null;

  if (!maisondeVerreData) {
    return <div>Les données pour Maison de verre ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={maisondeVerreData.titre}
        image={maisondeVerreData.image}
        rubriques={maisondeVerreData.rubriques}
      />
    </div>
  );
};

export default MaisonDeVerre;
