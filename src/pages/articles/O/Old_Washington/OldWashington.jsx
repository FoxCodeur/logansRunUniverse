import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const OldWashington = () => {
  const oldWashingtonData = data.O ? data.O["Old Washington"] : null;

  if (!oldWashingtonData) {
    return <div>Les données pour Old Washington ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={oldWashingtonData.titre}
        image={oldWashingtonData.image}
        rubriques={oldWashingtonData.rubriques}
      />
    </div>
  );
};

export default OldWashington;
