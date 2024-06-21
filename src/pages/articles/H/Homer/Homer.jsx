import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Homer = () => {
  const homerData = data.H ? data.H["Homer"] : null;

  if (!homerData) {
    return <div>Les données pour Homer ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={homerData.titre}
        image={homerData.image}
        rubriques={homerData.rubriques}
      />
    </div>
  );
};

export default Homer;
