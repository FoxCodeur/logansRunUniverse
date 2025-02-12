import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ripper = () => {
  const ripperData = data.R ? data.R["Ripper"] : null;

  if (!ripperData) {
    return <div>Les données pour Ripper ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="R" keyName="Ripper" />
    </div>
  );
};

export default Ripper;
