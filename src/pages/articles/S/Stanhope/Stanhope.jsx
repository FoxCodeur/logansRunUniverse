import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Stanhope = () => {
  const stanhopeData = data.S ? data.S["Stanhope"] : null;

  if (!stanhopeData) {
    return <div>Les données pour Stanhope ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={stanhopeData.titre}
        image={stanhopeData.image}
        rubriques={stanhopeData.rubriques}
      />
    </div>
  );
};
export default Stanhope;
