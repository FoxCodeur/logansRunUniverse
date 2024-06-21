import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LaCiteeDesDomes = () => {
  const domeData = data.D ? data.D["Domes"] : null;

  if (!domeData) {
    return (
      <div>Les données pour la Citée des Domes ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={domeData.titre}
        image={domeData.image}
        rubriques={domeData.rubriques}
      />
    </div>
  );
};

export default LaCiteeDesDomes;
