import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Fugitif = () => {
  const fugitifData = data.F ? data.F["fugitif"] : null;

  if (!fugitifData) {
    return (
      <div>Les données pour Crèche industrielle ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={fugitifData.titre}
        image={fugitifData.image}
        rubriques={fugitifData.rubriques}
      />
    </div>
  );
};

export default Fugitif;
