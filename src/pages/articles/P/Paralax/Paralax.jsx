import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Paralax = () => {
  const paralaxData = data.P ? data.P["Paralax"] : null;

  if (!paralaxData) {
    return <div>Les données pour Paralax ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={paralaxData.titre}
        image={paralaxData.image}
        rubriques={paralaxData.rubriques}
      />
    </div>
  );
};

export default Paralax;
