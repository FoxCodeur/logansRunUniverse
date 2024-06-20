import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Baleine = () => {
  const baleineData = data.B ? data.B["Baleine"] : null;
  if (!baleineData) {
    return <div>Les données pour Baleine ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={baleineData.titre}
        image={baleineData.image}
        rubriques={baleineData.rubriques}
      />
    </div>
  );
};

export default Baleine;
