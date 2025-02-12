import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Baleine = () => {
  const baleineData = data.B ? data.B["Baleine"] : null;
  if (!baleineData) {
    return <div>Les données pour Baleine ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="B" keyName="Baleine" />
    </div>
  );
};

export default Baleine;
