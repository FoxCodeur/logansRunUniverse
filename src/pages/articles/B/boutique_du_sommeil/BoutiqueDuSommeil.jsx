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
      <Definition section="B" keyName="Boutique du sommeil" />
    </div>
  );
};

export default BoutiqueDuSommeil;
