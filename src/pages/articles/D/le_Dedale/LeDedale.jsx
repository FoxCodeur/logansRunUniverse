import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeDedale = () => {
  const dedaleData = data.D ? data.D["Dédale"] : null;

  if (!dedaleData) {
    return <div>Les données pour Dédale ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={dedaleData.titre}
        image={dedaleData.image}
        rubriques={dedaleData.rubriques}
      />
    </div>
  );
};

export default LeDedale;
