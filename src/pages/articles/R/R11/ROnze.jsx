import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const ROnze = () => {
  const rOnzeData = data.R ? data.R["R 11"] : null;

  if (!rOnzeData) {
    return <div>Les données pour R 11 ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={rOnzeData.titre}
        image={rOnzeData.image}
        rubriques={rOnzeData.rubriques}
      />
    </div>
  );
};

export default ROnze;
