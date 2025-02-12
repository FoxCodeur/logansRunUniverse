import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Roebler = () => {
  const roeblerData = data.R ? data.R["Roebler"] : null;

  if (!roeblerData) {
    return <div>Les données pour Roebler ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="R" keyName="Roebler" />
    </div>
  );
};
export default Roebler;
