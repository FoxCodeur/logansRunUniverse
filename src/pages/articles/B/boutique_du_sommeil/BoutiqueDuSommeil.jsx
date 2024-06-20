import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const BoutiqueDuSommeil = () => {
  const boutiquedusommeilData = data.B ? data.B["Boutique du sommeil"] : null;

  if (!boutiquedusommeilData) {
    return (
      <div>Les données pour Boutique du sommeil ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={boutiquedusommeilData.titre}
        image={boutiquedusommeilData.image}
        rubriques={boutiquedusommeilData.rubriques}
      />
    </div>
  );
};

export default BoutiqueDuSommeil;
