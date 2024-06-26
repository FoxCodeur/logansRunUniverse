import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Sandman = () => {
  const sandmanData = data.S ? data.S["Sandman"] : null;

  if (!sandmanData) {
    return <div>Les données pour Sandman ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={sandmanData.titre}
        image={sandmanData.image}
        rubriques={sandmanData.rubriques}
      />
    </div>
  );
};

export default Sandman;
