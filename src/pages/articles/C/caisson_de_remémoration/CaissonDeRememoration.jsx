import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const CaissonDeRememoration = () => {
  // console.log("Data: ", data); // Vérifier les données importées
  const caissonData = data.C ? data.C["Caisson De Remémoration"] : null;
  // console.log("Caisson de remémoration Data: ", caissonData); // Vérifier les données spécifiques à Caisson De Remémoration

  if (!caissonData) {
    return (
      <div>
        Les données pour Caisson de remémoration ne sont pas disponibles.
      </div>
    );
  }

  return (
    <div>
      <Definition
        titre={caissonData.titre}
        image={caissonData.image}
        rubriques={caissonData.rubriques}
      />
    </div>
  );
};

export default CaissonDeRememoration;
