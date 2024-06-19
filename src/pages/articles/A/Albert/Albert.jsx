import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const Albert = () => {
  const albertData = data.A["Adam 1"];
  if (!albertData) {
    return <div>Les données pour Adam 1 ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={albertData.titre}
        image={albertData.image}
        rubriques={albertData.rubriques}
      />
    </div>
  );
};

export default Albert;
