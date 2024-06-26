import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const UniteDeVie = () => {
  const uniteDeVieData = data.U ? data.U["Unité de vie"] : null;

  if (!uniteDeVieData) {
    return <div>Les données pour Unité de vie ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={uniteDeVieData.titre}
        image={uniteDeVieData.image}
        rubriques={uniteDeVieData.rubriques}
      />
    </div>
  );
};

export default UniteDeVie;
