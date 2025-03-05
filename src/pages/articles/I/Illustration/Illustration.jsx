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
      <Definition section="I" keyName="Illustration" />
      <PursuitAnimation />
    </div>
  );
};

export default Illustration;
