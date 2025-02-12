import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Prince = () => {
  const princeData = data.P ? data.P["Prince"] : null;

  if (!princeData) {
    return <div>Les données pour Prince ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="P" keyName="Prince" />
    </div>
  );
};

export default Prince;
