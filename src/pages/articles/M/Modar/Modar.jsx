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
      <Definition
        titre={modarData.titre}
        image={modarData.image}
        rubriques={modarData.rubriques}
      />
    </div>
  );
};

export default Modar;
