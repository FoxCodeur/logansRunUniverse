import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const RevolverLimier = () => {
  const revolverLimierData = data.R ? data.R["Revolver limier"] : null;

  if (!revolverLimierData) {
    return <div>Les données pour Revolver limier ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="R" keyName="Revolver limier" />
    </div>
  );
};

export default RevolverLimier;
