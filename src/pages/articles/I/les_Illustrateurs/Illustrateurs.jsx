import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Illustrateurs = () => {
  const illustrateursData = data.I ? data.I["Les Illustrateurs"] : null;

  if (!illustrateursData) {
    return (
      <div>Les données pour Les Illustrateurs ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={illustrateursData.titre}
        image={illustrateursData.image}
        rubriques={illustrateursData.rubriques}
      />
    </div>
  );
};

export default Illustrateurs;
