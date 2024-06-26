import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Rawls = () => {
  const rawlsData = data.R ? data.R["Rawls"] : null;

  if (!rawlsData) {
    return <div>Les données pour Rawls ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={rawlsData.titre}
        image={rawlsData.image}
        rubriques={rawlsData.rubriques}
      />
    </div>
  );
};

export default Rawls;
