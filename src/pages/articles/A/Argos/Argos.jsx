import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Argos = () => {
  const argosData = data.A ? data.A["Argos"] : null;

  if (!argosData) {
    return <div>Les données pour Argos ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="A" keyName="Argos" />
    </div>
  );
};

export default Argos;
