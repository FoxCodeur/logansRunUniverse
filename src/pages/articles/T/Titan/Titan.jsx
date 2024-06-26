import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Titan = () => {
  const titanData = data.T ? data.T["Titan"] : null;

  if (!titanData) {
    return <div>Les données pour Titan ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={titanData.titre}
        image={titanData.image}
        rubriques={titanData.rubriques}
      />
    </div>
  );
};

export default Titan;
