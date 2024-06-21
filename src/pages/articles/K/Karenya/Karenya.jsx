import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Karenya = () => {
  const karenyaData = data.K ? data.K["Karenya"] : null;

  if (!karenyaData) {
    return <div>Les données pour Karenya ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={karenyaData.titre}
        image={karenyaData.image}
        rubriques={karenyaData.rubriques}
      />
    </div>
  );
};

export default Karenya;
