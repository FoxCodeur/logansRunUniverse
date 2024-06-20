import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Carrousel = () => {
  const carrouselData = data.C ? data.C["Carrousel"] : null;

  if (!carrouselData) {
    return <div>Les données pour Carrousel ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={carrouselData.titre}
        image={carrouselData.image}
        rubriques={carrouselData.rubriques}
      />
    </div>
  );
};

export default Carrousel;
