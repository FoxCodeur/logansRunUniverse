import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Roebler = () => {
  const roeblerData = data.R ? data.R["Roebler"] : null;

  if (!roeblerData) {
    return <div>Les données pour Roebler ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={roeblerData.titre}
        image={roeblerData.image}
        rubriques={roeblerData.rubriques}
      />
    </div>
  );
};
export default Roebler;
