import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ngc = () => {
  const ngcData = data.N ? data.N["NGC"] : null;

  if (!ngcData) {
    return <div>Les données pour NGC ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={ngcData.titre}
        image={ngcData.image}
        rubriques={ngcData.rubriques}
      />
    </div>
  );
};

export default Ngc;
