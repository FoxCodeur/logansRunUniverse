import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const NolanWilliamF = () => {
  const nolanWilliamData = data.N ? data.N["William F Nolan"] : null;

  if (!nolanWilliamData) {
    return <div>Les données pour William F Nolan ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="N" keyName="William F Nolan" />
    </div>
  );
};

export default NolanWilliamF;
