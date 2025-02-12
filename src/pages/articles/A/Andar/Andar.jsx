import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Andar = () => {
  const andarData = data.A ? data.A["Andar"] : null;

  if (!andarData) {
    return <div>Les données pour Andar ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="A" keyName="Andar" />
    </div>
  );
};

export default Andar;
