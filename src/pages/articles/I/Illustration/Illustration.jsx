import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import PursuitAnimation from "./PursuitAnimation/PursuitAnimation";
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
      <PursuitAnimation />
    </div>
  );
};

export default Illustration;
