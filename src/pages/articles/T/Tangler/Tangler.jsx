import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Tangler = () => {
  const tanglerData = data.T ? data.T["Tangler"] : null;

  if (!tanglerData) {
    return <div>Les données pour Tangler ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={tanglerData.titre}
        image={tanglerData.image}
        rubriques={tanglerData.rubriques}
      />
    </div>
  );
};

export default Tangler;
