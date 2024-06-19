import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Andar = () => {
  const andarData = data.A["Andar"];

  if (!andarData) {
    return <div>Les données pour Andar ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={andarData.titre}
        image={andarData.image}
        rubriques={andarData.rubriques}
      />
    </div>
  );
};

export default Andar;
