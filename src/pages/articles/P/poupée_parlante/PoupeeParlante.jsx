import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const PoupeeParlante = () => {
  const poupeeParlanteData = data.P ? data.P["Poupée parlante"] : null;

  if (!poupeeParlanteData) {
    return <div>Les données pour Poupée parlante ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="P" keyName="Poupée parlante" />
    </div>
  );
};

export default PoupeeParlante;
