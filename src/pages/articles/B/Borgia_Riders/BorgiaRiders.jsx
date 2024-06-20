import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const BorgiaRiders = () => {
  const borgiasData = data.B ? data.B["Borgia riders"] : null;

  if (!borgiasData) {
    return <div>Les données pour Borgias riders ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={borgiasData.titre}
        image={borgiasData.image}
        rubriques={borgiasData.rubriques}
      />
    </div>
  );
};

export default BorgiaRiders;
