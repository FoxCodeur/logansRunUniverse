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
      <Definition section="C" keyName="Crèche industrielle" />
    </div>
  );
};

export default CrecheIndustrielle;
