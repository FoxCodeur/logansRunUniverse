import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeGrandSommeil = () => {
  const grandsommeilData = data.G ? data.G["Le Grand Sommeil"] : null;

  if (!grandsommeilData) {
    return (
      <div>Les données pour les gitans libres ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="G" keyName="Le Grand Sommeil" />
    </div>
  );
};

export default LeGrandSommeil;
