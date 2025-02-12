import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const QuartierGeneral = () => {
  const qgData = data.Q ? data.Q["Quartier general du GS"] : null;

  if (!qgData) {
    return (
      <div>
        Les données pour Quartier general du GS ne sont pas disponibles.
      </div>
    );
  }

  return (
    <div>
      <Definition section="Q" keyName="Quartier general du GS" />
    </div>
  );
};

export default QuartierGeneral;
