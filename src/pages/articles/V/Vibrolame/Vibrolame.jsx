import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Vibrolame = () => {
  const vibroLameData = data.V ? data.V["vibrolame"] : null;

  if (!vibroLameData) {
    return <div>Les données pour vibrolame ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="V" keyName="vibrolame" />
    </div>
  );
};

export default Vibrolame;
