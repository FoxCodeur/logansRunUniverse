import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Vapor = () => {
  const vaporData = data.V ? data.V["Vapor"] : null;

  if (!vaporData) {
    return <div>Les données pour Vapor ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="V" keyName="Vapor" />
    </div>
  );
};

export default Vapor;
