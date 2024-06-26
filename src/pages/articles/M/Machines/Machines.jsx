import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Machines = () => {
  const machinesData = data.M ? data.M["Machines"] : null;

  if (!machinesData) {
    return <div>Les données pour Machines ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={machinesData.titre}
        image={machinesData.image}
        rubriques={machinesData.rubriques}
      />
    </div>
  );
};

export default Machines;
