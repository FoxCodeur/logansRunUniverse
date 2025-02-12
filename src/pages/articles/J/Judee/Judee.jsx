import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Judee = () => {
  const judeeData = data.J ? data.J["Judee"] : null;

  if (!judeeData) {
    return <div>Les données pour Judee ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="J" keyName="Judee" />
    </div>
  );
};

export default Judee;
