import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Sanson = () => {
  const sansonData = data.S ? data.S["Sanson"] : null;

  if (!sansonData) {
    return <div>Les données pour Sanson ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="S" keyName="Sanson" />
    </div>
  );
};

export default Sanson;
