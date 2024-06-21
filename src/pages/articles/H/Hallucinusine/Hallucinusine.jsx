import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Hallucinusine = () => {
  const hallucinusineData = data.H ? data.H["Hallucinusine"] : null;

  if (!hallucinusineData) {
    return <div>Les données pour Hallucinusine ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={hallucinusineData.titre}
        image={hallucinusineData.image}
        rubriques={hallucinusineData.rubriques}
      />
    </div>
  );
};

export default Hallucinusine;
