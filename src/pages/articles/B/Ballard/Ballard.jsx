import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Ballard = () => {
  // console.log("Data: ", data); // Pour vérifier les données importées
  const ballardData = data.B ? data.B["Ballard"] : null;
  // console.log("Ballard Data: ", ballardData); // Pour vérifier les données de Ballard

  if (!ballardData) {
    return <div>Les données pour Ballard ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="B" keyName="Ballard" />
    </div>
  );
};

export default Ballard;
