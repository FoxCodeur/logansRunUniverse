import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Harry = () => {
  const harryData = data.H ? data.H["Harry"] : null;

  if (!harryData) {
    return <div>Les données pour Harry ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={harryData.titre}
        image={harryData.image}
        rubriques={harryData.rubriques}
      />
    </div>
  );
};

export default Harry;
