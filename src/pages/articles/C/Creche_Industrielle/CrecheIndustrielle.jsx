import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const CrecheIndustrielle = () => {
  const crecheIndData = data.C ? data.C["Crèche industrielle"] : null;

  if (!crecheIndData) {
    return (
      <div>Les données pour Crèche industrielle ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={crecheIndData.titre}
        image={crecheIndData.image}
        rubriques={crecheIndData.rubriques}
      />
    </div>
  );
};

export default CrecheIndustrielle;
