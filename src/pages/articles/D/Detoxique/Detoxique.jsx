import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Detoxique = () => {
  const detoxiqueData = data.D ? data.D["Detoxique"] : null;

  if (!detoxiqueData) {
    return <div>Les données pour Detoxique ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={detoxiqueData.titre}
        image={detoxiqueData.image}
        rubriques={detoxiqueData.rubriques}
      />
    </div>
  );
};

export default Detoxique;
