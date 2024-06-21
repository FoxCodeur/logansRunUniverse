import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Kelly = () => {
  const kellyData = data.K ? data.K["Kelly"] : null;

  if (!kellyData) {
    return <div>Les données pour Kelly ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={kellyData.titre}
        image={kellyData.image}
        rubriques={kellyData.rubriques}
      />
    </div>
  );
};

export default Kelly;
