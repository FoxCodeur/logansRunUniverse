import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const CharmingBilly = () => {
  const charmingBillyData = data.C ? data.C["Charming Billy"] : null;

  if (!charmingBillyData) {
    return <div>Les données pour Cathedrale ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={charmingBillyData.titre}
        image={charmingBillyData.image}
        rubriques={charmingBillyData.rubriques}
      />
    </div>
  );
};

export default CharmingBilly;
