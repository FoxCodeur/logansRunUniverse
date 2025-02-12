import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Needler = () => {
  const needlerData = data.N ? data.N["Needler"] : null;

  if (!needlerData) {
    return <div>Les données pour Needler ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="N" keyName="Needler" />
    </div>
  );
};

export default Needler;
