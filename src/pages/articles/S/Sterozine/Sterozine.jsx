import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Sterozine = () => {
  const sterozineData = data.S ? data.S["Sterozine"] : null;

  if (!sterozineData) {
    return <div>Les données pour Sterozine ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="S" keyName="Sterozine" />
    </div>
  );
};

export default Sterozine;
