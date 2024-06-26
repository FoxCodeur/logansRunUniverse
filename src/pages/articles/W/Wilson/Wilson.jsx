import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Wilson = () => {
  const wilsonData = data.W ? data.W["Wilson"] : null;

  if (!wilsonData) {
    return <div>Les données pour Wilson ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={wilsonData.titre}
        image={wilsonData.image}
        rubriques={wilsonData.rubriques}
      />
    </div>
  );
};

export default Wilson;
