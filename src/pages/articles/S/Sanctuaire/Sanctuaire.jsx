import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Sanctuaire = () => {
  const sanctuaireData = data.S ? data.S["Sanctuaire"] : null;

  if (!sanctuaireData) {
    return <div>Les données pour Sanctuaire ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="S" keyName="Sanctuaire" />
    </div>
  );
};

export default Sanctuaire;
