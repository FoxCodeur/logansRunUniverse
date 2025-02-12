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
      <Definition section="L" keyName="Lilith" />
    </div>
  );
};

export default Lilith;
