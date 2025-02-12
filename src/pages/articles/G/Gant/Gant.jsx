import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import AnimeGant from "./animeGant/AnimeGant";
const Gant = () => {
  const gantData = data.G ? data.G["Gant"] : null;

  if (!gantData) {
    return <div>Les données pour Gant ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="G" keyName="Gant" />
      <AnimeGant />
    </div>
  );
};

export default Gant;
