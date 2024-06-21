import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Fennister = () => {
  const fennisterData = data.F ? data.F["Fennister"] : null;

  if (!fennisterData) {
    return <div>Les données pour Fennister ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={fennisterData.titre}
        image={fennisterData.image}
        rubriques={fennisterData.rubriques}
      />
    </div>
  );
};

export default Fennister;
