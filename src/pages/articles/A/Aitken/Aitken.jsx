import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Aitken = () => {
  const aikenData = data.A["Aitken"];
  if (!aikenData) {
    return <div>Les données pour Aigle Mécha ne sont pas disponibles.</div>;
  }
  return (
    <Definition
      titre={aikenData.titre}
      image={aikenData.image}
      rubriques={aikenData.rubriques}
    />
  );
};
export default Aitken;
