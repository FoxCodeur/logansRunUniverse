import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Doyle = () => {
  const doyleData = data.D ? data.D["Doyle"] : null;

  if (!doyleData) {
    return <div>Les données pour Doyle ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={doyleData.titre}
        image={doyleData.image}
        rubriques={doyleData.rubriques}
      />
    </div>
  );
};

export default Doyle;
