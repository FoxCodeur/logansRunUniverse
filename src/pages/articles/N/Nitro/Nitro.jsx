import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Nitro = () => {
  const nitroData = data.N ? data.N["Nitro"] : null;

  if (!nitroData) {
    return <div>Les données pour Nitro ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={nitroData.titre}
        image={nitroData.image}
        rubriques={nitroData.rubriques}
      />
    </div>
  );
};

export default Nitro;
