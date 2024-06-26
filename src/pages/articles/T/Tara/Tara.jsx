import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Tara = () => {
  const taraData = data.T ? data.T["Tara"] : null;

  if (!taraData) {
    return <div>Les données pour Tara ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={taraData.titre}
        image={taraData.image}
        rubriques={taraData.rubriques}
      />
    </div>
  );
};

export default Tara;
