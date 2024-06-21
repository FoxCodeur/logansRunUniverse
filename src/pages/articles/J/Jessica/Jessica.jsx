import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Jessica = () => {
  const jessicaData = data.J ? data.J["Jessica"] : null;

  if (!jessicaData) {
    return <div>Les données pour Jessica ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={jessicaData.titre}
        image={jessicaData.image}
        rubriques={jessicaData.rubriques}
      />
    </div>
  );
};

export default Jessica;
