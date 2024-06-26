import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ritter = () => {
  const ritterData = data.R ? data.R["Ritter"] : null;

  if (!ritterData) {
    return <div>Les données pour Ritter ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={ritterData.titre}
        image={ritterData.image}
        rubriques={ritterData.rubriques}
      />
    </div>
  );
};

export default Ritter;
