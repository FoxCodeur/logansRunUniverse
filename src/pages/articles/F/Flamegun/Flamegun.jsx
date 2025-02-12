import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Flamegun = () => {
  const flamegunData = data.F ? data.F["Flamegun"] : null;

  if (!flamegunData) {
    return <div>Les données pour Flamegun ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="F" keyName="Flamegun" />
    </div>
  );
};

export default Flamegun;
