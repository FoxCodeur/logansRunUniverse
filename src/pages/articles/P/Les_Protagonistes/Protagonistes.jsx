import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Protagonistes = () => {
  const protagonistesData = data.P ? data.P["Protagonistes"] : null;

  if (!protagonistesData) {
    return <div>Les données pour Protagonistes ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={protagonistesData.titre}
        image={protagonistesData.image}
        rubriques={protagonistesData.rubriques}
      />
    </div>
  );
};

export default Protagonistes;
