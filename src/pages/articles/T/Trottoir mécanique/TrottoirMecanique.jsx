import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const TrottoirMecanique = () => {
  const trottoirMecaniqueData = data.T ? data.T["Trottoir mécanique"] : null;

  if (!trottoirMecaniqueData) {
    return (
      <div>Les données pour Trottoir mécanique ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="T" keyName="Trottoir mécanique" />
    </div>
  );
};

export default TrottoirMecanique;
