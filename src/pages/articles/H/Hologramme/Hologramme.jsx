import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Hologramme = () => {
  const hologrammeData = data.H ? data.H["Hologramme"] : null;

  if (!hologrammeData) {
    return <div>Les données pour Hologramme ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="H" keyName="Hologramme" />
    </div>
  );
};

export default Hologramme;
