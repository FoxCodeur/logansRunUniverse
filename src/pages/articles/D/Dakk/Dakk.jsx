import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Dakk = () => {
  const dakkData = data.D ? data.D["Dakk"] : null;

  if (!dakkData) {
    return <div>Les données pour Dakk ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="D" keyName="Dakk" />
    </div>
  );
};

export default Dakk;
