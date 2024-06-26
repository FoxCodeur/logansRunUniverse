import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Sawyer = () => {
  const sawyerData = data.S ? data.S["Sawyer"] : null;

  if (!sawyerData) {
    return <div>Les données pour Sawyer ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={sawyerData.titre}
        image={sawyerData.image}
        rubriques={sawyerData.rubriques}
      />
    </div>
  );
};
export default Sawyer;
