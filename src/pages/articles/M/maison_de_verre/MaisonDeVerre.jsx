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
      <Definition section="M" keyName="Maison de verre" />
    </div>
  );
};

export default MaisonDeVerre;
