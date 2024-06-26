import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Rutago = () => {
  const rutagoData = data.R ? data.R["Rutago"] : null;

  if (!rutagoData) {
    return <div>Les données pour Rutago ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={rutagoData.titre}
        image={rutagoData.image}
        rubriques={rutagoData.rubriques}
      />
    </div>
  );
};

export default Rutago;
