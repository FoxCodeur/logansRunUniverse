import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Gant = () => {
  const gantData = data.G ? data.G["Gant"] : null;

  if (!gantData) {
    return <div>Les données pour Gant ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={gantData.titre}
        image={gantData.image}
        rubriques={gantData.rubriques}
      />
    </div>
  );
};

export default Gant;
