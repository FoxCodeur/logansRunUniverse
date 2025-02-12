import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Lacy = () => {
  const lacyData = data.L ? data.L["Lacy"] : null;

  if (!lacyData) {
    return <div>Les données pour Lacy ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="L" keyName="Lacy" />
    </div>
  );
};

export default Lacy;
