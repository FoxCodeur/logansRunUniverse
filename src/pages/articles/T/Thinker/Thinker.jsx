import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Thinker = () => {
  const thinkerData = data.T ? data.T["THINKER"] : null;

  if (!thinkerData) {
    return <div>Les données pour THINKER ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={thinkerData.titre}
        image={thinkerData.image}
        rubriques={thinkerData.rubriques}
      />
    </div>
  );
};

export default Thinker;
