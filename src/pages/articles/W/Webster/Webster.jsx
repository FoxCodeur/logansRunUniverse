import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Webster = () => {
  const websterData = data.W ? data.W["Webster"] : null;

  if (!websterData) {
    return <div>Les données pour Webster ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={websterData.titre}
        image={websterData.image}
        rubriques={websterData.rubriques}
      />
    </div>
  );
};
export default Webster;
