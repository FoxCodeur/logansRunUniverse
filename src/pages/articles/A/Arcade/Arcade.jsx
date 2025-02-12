import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import "./Arcade.scss";
import BandeauArcade from "./bandeauArcade/BandeauArcade";

const Arcade = () => {
  const arcadeData = data.A ? data.A["Arcade"] : null;

  if (!arcadeData) {
    return <div>Les données pour Arcade ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="A" keyName="Arcade" />
      {/* sous composant */}
      <BandeauArcade />
    </div>
  );
};

export default Arcade;
