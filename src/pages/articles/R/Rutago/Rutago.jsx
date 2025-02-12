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
      <Definition section="R" keyName="Rutago" />
    </div>
  );
};

export default Rutago;
