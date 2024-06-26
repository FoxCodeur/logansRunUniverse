import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Omnite = () => {
  const omniteData = data.O ? data.O["Omnite"] : null;

  if (!omniteData) {
    return <div>Les données pour Omnite ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={omniteData.titre}
        image={omniteData.image}
        rubriques={omniteData.rubriques}
      />
    </div>
  );
};

export default Omnite;
