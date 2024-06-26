import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ripper = () => {
  const ripperData = data.R ? data.R["Ripper"] : null;

  if (!ripperData) {
    return <div>Les données pour Ripper ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={ripperData.titre}
        image={ripperData.image}
        rubriques={ripperData.rubriques}
      />
    </div>
  );
};

export default Ripper;
