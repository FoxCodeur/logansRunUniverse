import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ankh = () => {
  const ankhData = data.A["Ankh"];

  if (!ankhData) {
    return <div>Les données pour Ankh ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={ankhData.titre}
        image={ankhData.image}
        rubriques={ankhData.rubriques}
      />
    </div>
  );
};

export default Ankh;
