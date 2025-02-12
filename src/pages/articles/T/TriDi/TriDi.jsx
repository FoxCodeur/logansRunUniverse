import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const TriDi = () => {
  const triDiData = data.T ? data.T["Tri Di"] : null;

  if (!triDiData) {
    return <div>Les données pour Tri Di ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="T" keyName="Tri Di" />
    </div>
  );
};

export default TriDi;
