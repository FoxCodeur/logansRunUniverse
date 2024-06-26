import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LogansRunRoman = () => {
  const logansrunnovelData = data.L ? data.L["Logans run roman"] : null;

  if (!logansrunnovelData) {
    return (
      <div>Les données pour Logans run roman ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={logansrunnovelData.titre}
        image={logansrunnovelData.image}
        rubriques={logansrunnovelData.rubriques}
      />
    </div>
  );
};

export default LogansRunRoman;
