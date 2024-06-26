import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const MazeCar = () => {
  const mazeCarData = data.M ? data.M["Maze Car"] : null;

  if (!mazeCarData) {
    return (
      <div>Les données pour Maze Car de verre ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={mazeCarData.titre}
        image={mazeCarData.image}
        rubriques={mazeCarData.rubriques}
      />
    </div>
  );
};

export default MazeCar;
