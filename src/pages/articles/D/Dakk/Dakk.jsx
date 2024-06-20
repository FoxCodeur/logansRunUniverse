import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Dakk = () => {
  const dakkData = data.D ? data.D["Dakk"] : null;

  if (!dakkData) {
    return <div>Les données pour Dakk ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={dakkData.titre}
        image={dakkData.image}
        rubriques={dakkData.rubriques}
      />
    </div>
  );
};

export default Dakk;
