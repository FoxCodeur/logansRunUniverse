import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Lilith = () => {
  const lilithData = data.L ? data.L["Lilith"] : null;

  if (!lilithData) {
    return <div>Les données pour Lilith ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={lilithData.titre}
        image={lilithData.image}
        rubriques={lilithData.rubriques}
      />
    </div>
  );
};

export default Lilith;
