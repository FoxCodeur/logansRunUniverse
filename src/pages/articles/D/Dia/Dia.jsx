import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Dia = () => {
  const diaData = data.D ? data.D["Dia"] : null;

  if (!diaData) {
    return <div>Les données pour Dia ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="D" keyName="Dia" />
    </div>
  );
};

export default Dia;
