import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Mary = () => {
  const maryData = data.M ? data.M["Mary"] : null;

  if (!maryData) {
    return <div>Les données pour Mary ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={maryData.titre}
        image={maryData.image}
        rubriques={maryData.rubriques}
      />
    </div>
  );
};

export default Mary;
