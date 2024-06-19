import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Baxter = () => {
  const baxterData = data.B["Baxter"];

  if (!baxterData) {
    return <div>Les données pour Baxter ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={baxterData.titre}
        image={baxterData.image}
        rubriques={baxterData.rubriques}
      />
    </div>
  );
};

export default Baxter;
