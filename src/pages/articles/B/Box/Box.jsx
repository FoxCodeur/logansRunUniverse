import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Box = () => {
  const boxData = data.B ? data.B["Box"] : null;

  if (!boxData) {
    return <div>Les données pour Box ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={boxData.titre}
        image={boxData.image}
        rubriques={boxData.rubriques}
      />
    </div>
  );
};

export default Box;
