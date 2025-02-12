import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import MemoryGames from "./MemoryGame/MemoryGames";
const Doyle = () => {
  const doyleData = data.D ? data.D["Doyle"] : null;

  if (!doyleData) {
    return <div>Les données pour Doyle ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="D" keyName="Doyle" />
      <MemoryGames />
    </div>
  );
};

export default Doyle;
