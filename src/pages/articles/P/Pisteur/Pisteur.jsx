import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Pisteur = () => {
  const pisteurData = data.P ? data.P["Pisteur"] : null;

  if (!pisteurData) {
    return <div>Les données pour Pisteur ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="P" keyName="Pisteur" />
    </div>
  );
};

export default Pisteur;
