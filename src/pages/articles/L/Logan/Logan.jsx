import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Logan = () => {
  const loganData = data.L ? data.L["Logan"] : null;

  if (!loganData) {
    return <div>Les données pour Logan ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={loganData.titre}
        image={loganData.image}
        rubriques={loganData.rubriques}
      />
    </div>
  );
};

export default Logan;
