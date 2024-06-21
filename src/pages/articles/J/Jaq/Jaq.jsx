import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Jaq = () => {
  const jaqData = data.J ? data.J["Jaq"] : null;

  if (!jaqData) {
    return <div>Les données pour Jaq ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={jaqData.titre}
        image={jaqData.image}
        rubriques={jaqData.rubriques}
      />
    </div>
  );
};

export default Jaq;
