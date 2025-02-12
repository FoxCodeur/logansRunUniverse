import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Baxter = () => {
  const baxterData = data.B ? data.B["Baxter"] : null;

  if (!baxterData) {
    return <div>Les données pour Baxter ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="B" keyName="Baxter" />
    </div>
  );
};

export default Baxter;
