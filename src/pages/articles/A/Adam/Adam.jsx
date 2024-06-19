import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Adam = () => {
  // console.log("Data: ", data); // Pour vérifier les données importées
  const adamData = data.A["Adam 1"];
  // console.log("Adam Data: ", adamData); // Pour vérifier les données de Adam 1

  if (!adamData) {
    return <div>Les données pour Adam 1 ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={adamData.titre}
        image={adamData.image}
        rubriques={adamData.rubriques}
      />
    </div>
  );
};

export default Adam;
