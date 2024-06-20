import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Arcade = () => {
  const arcadeData = data.A ? data.A["Arcade"] : null;

  if (!arcadeData) {
    return <div>Les données pour Arcade ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={arcadeData.titre}
        image={arcadeData.image}
        rubriques={arcadeData.rubriques}
      />
    </div>
  );
};

export default Arcade;
