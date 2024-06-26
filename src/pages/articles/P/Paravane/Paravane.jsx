import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Paravane = () => {
  const paravaneData = data.P ? data.P["Paravane"] : null;

  if (!paravaneData) {
    return <div>Les données pour Paravane ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={paravaneData.titre}
        image={paravaneData.image}
        rubriques={paravaneData.rubriques}
      />
    </div>
  );
};

export default Paravane;
