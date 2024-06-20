import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Bradley = () => {
  const bradleyData = data.B ? data.B["Bradley"] : null;

  if (!bradleyData) {
    return <div>Les données pour Bradley ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={bradleyData.titre}
        image={bradleyData.image}
        rubriques={bradleyData.rubriques}
      />
    </div>
  );
};

export default Bradley;
