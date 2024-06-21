import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Illustration = () => {
  const illustrationsData = data.I ? data.I["Illustration"] : null;

  if (!illustrationsData) {
    return <div>Les données pour Illustration ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={illustrationsData.titre}
        image={illustrationsData.image}
        rubriques={illustrationsData.rubriques}
      />
    </div>
  );
};

export default Illustration;
