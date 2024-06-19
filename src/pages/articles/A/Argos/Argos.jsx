import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Argos = () => {
  const argosData = data.A["Argos"];

  if (!argosData) {
    return <div>Les données pour Argos ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={argosData.titre}
        image={argosData.image}
        rubriques={argosData.rubriques}
      />
    </div>
  );
};

export default Argos;
