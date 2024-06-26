import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Sanson = () => {
  const sansonData = data.S ? data.S["Sanson"] : null;

  if (!sansonData) {
    return <div>Les données pour Sanson ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={sansonData.titre}
        image={sansonData.image}
        rubriques={sansonData.rubriques}
      />
    </div>
  );
};

export default Sanson;
