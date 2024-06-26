import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Pisteur = () => {
  const pisteurData = data.P ? data.P["Pisteur"] : null;

  if (!pisteurData) {
    return <div>Les données pour Pisteur ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={pisteurData.titre}
        image={pisteurData.image}
        rubriques={pisteurData.rubriques}
      />
    </div>
  );
};

export default Pisteur;
