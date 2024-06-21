import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const FleurDeVie = () => {
  const fleurdevieData = data.F ? data.F["Fleur de Vie"] : null;

  if (!fleurdevieData) {
    return <div>Les données pour fleur de vie ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={fleurdevieData.titre}
        image={fleurdevieData.image}
        rubriques={fleurdevieData.rubriques}
      />
    </div>
  );
};

export default FleurDeVie;
