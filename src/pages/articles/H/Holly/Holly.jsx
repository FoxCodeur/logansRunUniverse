import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Holly = () => {
  const hollyData = data.H ? data.H["Holly"] : null;

  if (!hollyData) {
    return <div>Les données pour Holly ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={hollyData.titre}
        image={hollyData.image}
        rubriques={hollyData.rubriques}
      />
    </div>
  );
};

export default Holly;
