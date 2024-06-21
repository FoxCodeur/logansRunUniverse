import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Hoverstick = () => {
  const hoverstickData = data.H ? data.H["Hoverstick"] : null;

  if (!hoverstickData) {
    return <div>Les données pour Hoverstick ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={hoverstickData.titre}
        image={hoverstickData.image}
        rubriques={hoverstickData.rubriques}
      />
    </div>
  );
};

export default Hoverstick;
