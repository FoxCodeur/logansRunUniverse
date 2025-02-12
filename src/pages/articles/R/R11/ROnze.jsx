import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const ROnze = () => {
  const rOnzeData = data.R ? data.R["R 11"] : null;

  if (!rOnzeData) {
    return <div>Les données pour R 11 ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="R" keyName="R 11" />
    </div>
  );
};

export default ROnze;
