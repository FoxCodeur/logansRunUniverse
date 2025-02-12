import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Modar = () => {
  const modarData = data.M ? data.M["Modar"] : null;

  if (!modarData) {
    return <div>Les données pour Modar ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="M" keyName="Modar" />
    </div>
  );
};

export default Modar;
