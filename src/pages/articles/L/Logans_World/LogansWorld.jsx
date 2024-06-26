import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LogansWorld = () => {
  const logansWorldData = data.L ? data.L["Logans World roman"] : null;

  if (!logansWorldData) {
    return (
      <div>Les données pour Logans World roman ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={logansWorldData.titre}
        image={logansWorldData.image}
        rubriques={logansWorldData.rubriques}
      />
    </div>
  );
};

export default LogansWorld;
