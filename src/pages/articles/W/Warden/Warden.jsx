import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Warden = () => {
  const wardenData = data.W ? data.W["Warden"] : null;

  if (!wardenData) {
    return <div>Les données pour Warden ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={wardenData.titre}
        image={wardenData.image}
        rubriques={wardenData.rubriques}
      />
    </div>
  );
};

export default Warden;
