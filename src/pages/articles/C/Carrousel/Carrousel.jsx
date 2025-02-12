import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import BandeauCarrousel from "./BandeauCarrousel";
const Carrousel = () => {
  const carrouselData = data.C ? data.C["Carrousel"] : null;

  if (!carrouselData) {
    return <div>Les données pour Carrousel ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Carrousel" />
      <BandeauCarrousel />
    </div>
  );
};

export default Carrousel;
