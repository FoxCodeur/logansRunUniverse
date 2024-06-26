import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Regulateur = () => {
  const regulateurData = data.R ? data.R["Regulateur"] : null;

  if (!regulateurData) {
    return <div>Les données pour Regulateur ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={regulateurData.titre}
        image={regulateurData.image}
        rubriques={regulateurData.rubriques}
      />
    </div>
  );
};

export default Regulateur;
