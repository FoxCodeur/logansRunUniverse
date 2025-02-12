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
      <Definition section="R" keyName="Regulateur" />
    </div>
  );
};

export default Regulateur;
