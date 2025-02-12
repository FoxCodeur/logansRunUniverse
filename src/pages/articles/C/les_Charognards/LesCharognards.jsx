import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LesCharognards = () => {
  const charognardsData = data.C ? data.C["Les Charognards"] : null;

  if (!charognardsData) {
    return <div>Les données pour Complexe city ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Les Charognards" />
    </div>
  );
};

export default LesCharognards;
