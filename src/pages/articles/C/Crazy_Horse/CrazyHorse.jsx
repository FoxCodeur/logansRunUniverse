import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const CrazyHorse = () => {
  const crazyHorseData = data.C ? data.C["Crazy Horse"] : null;

  if (!crazyHorseData) {
    return <div>Les données pour Crazy-horse ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Crazy Horse" />
    </div>
  );
};

export default CrazyHorse;
