import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Ballard = () => {
  // console.log("Data: ", data); // Pour vérifier les données importées
  const ballardData = data.B["Ballard"];
  // console.log("Ballard Data: ", ballardData); // Pour vérifier les données de Ballard

  if (!ballardData) {
    return <div>Les données pour Ballard ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={ballardData.titre}
        image={ballardData.image}
        rubriques={ballardData.rubriques}
      />
    </div>
  );
};

export default Ballard;
