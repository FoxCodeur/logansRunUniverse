import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Cathedrale = () => {
  const cathedraleData = data.C ? data.C["Cathedrale"] : null;

  if (!cathedraleData) {
    return <div>Les données pour Cathedrale ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Cathedrale" />
    </div>
  );
};

export default Cathedrale;
