import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Albert = () => {
  // Vérifiez la structure des données importées
  // console.log("Data: ", data);
  // console.log("Data.A: ", data.A);
  // console.log("Keys in Data.A: ", Object.keys(data.A));

  // Accédez aux données spécifiques à Albert
  const albertData = data.A ? data.A["Albert"] : null;
  // console.log("Albert Data: ", albertData);

  if (!albertData) {
    return <div>Les données pour Albert ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={albertData.titre}
        image={albertData.image}
        rubriques={albertData.rubriques}
      />
    </div>
  );
};

export default Albert;
