import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Molly = () => {
  const mollyData = data.M ? data.M["Molly"] : null;

  if (!mollyData) {
    return <div>Les données pour Molly ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="M" keyName="Molly" />
    </div>
  );
};

export default Molly;
