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
      <Definition section="M" keyName="Motorcycle" />
    </div>
  );
};

export default MotorCycle;
