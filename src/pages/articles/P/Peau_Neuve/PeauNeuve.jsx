import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const PeauNeuve = () => {
  const peauNeuveData = data.P ? data.P["Peau Neuve"] : null;

  if (!peauNeuveData) {
    return <div>Les données pour Peau Neuve ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={peauNeuveData.titre}
        image={peauNeuveData.image}
        rubriques={peauNeuveData.rubriques}
      />
    </div>
  );
};

export default PeauNeuve;
