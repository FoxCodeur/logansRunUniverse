import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeDoc = () => {
  const docData = data.D ? data.D["Doc"] : null;

  if (!docData) {
    return <div>Les données pour le Doc ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={docData.titre}
        image={docData.image}
        rubriques={docData.rubriques}
      />
    </div>
  );
};

export default LeDoc;
