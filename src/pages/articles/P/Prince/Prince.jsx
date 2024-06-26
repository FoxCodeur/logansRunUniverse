import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Prince = () => {
  const princeData = data.P ? data.P["Prince"] : null;

  if (!princeData) {
    return <div>Les données pour Prince ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={princeData.titre}
        image={princeData.image}
        rubriques={princeData.rubriques}
      />
    </div>
  );
};

export default Prince;
