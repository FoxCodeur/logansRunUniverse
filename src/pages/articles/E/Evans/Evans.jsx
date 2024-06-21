import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Evans = () => {
  const evansData = data.E ? data.E["Evans"] : null;

  if (!evansData) {
    return <div>Les données pour Evans ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={evansData.titre}
        image={evansData.image}
        rubriques={evansData.rubriques}
      />
    </div>
  );
};

export default Evans;
