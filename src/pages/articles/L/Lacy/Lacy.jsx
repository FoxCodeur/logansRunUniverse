import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Lacy = () => {
  const lacyData = data.L ? data.L["Lacy"] : null;

  if (!lacyData) {
    return <div>Les données pour Lacy ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={lacyData.titre}
        image={lacyData.image}
        rubriques={lacyData.rubriques}
      />
    </div>
  );
};

export default Lacy;
