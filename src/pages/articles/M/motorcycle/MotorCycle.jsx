import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const MotorCycle = () => {
  const motorCycleData = data.M ? data.M["Motorcycle"] : null;

  if (!motorCycleData) {
    return <div>Les données pour Motorcycle ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={motorCycleData.titre}
        image={motorCycleData.image}
        rubriques={motorCycleData.rubriques}
      />
    </div>
  );
};

export default MotorCycle;
