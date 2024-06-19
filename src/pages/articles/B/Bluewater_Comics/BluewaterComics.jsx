import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const BluewaterComics = () => {
  const bluewatercomicsData = data.B["Bluewater Comics"];

  if (!bluewatercomicsData) {
    return <div>Les données pour Baxter ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={bluewatercomicsData.titre}
        image={bluewatercomicsData.image}
        rubriques={bluewatercomicsData.rubriques}
      />
    </div>
  );
};

export default BluewaterComics;
