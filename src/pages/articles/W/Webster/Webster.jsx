import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Webster = () => {
  const websterData = data.W ? data.W["Webster"] : null;

  if (!websterData) {
    return <div>Les données pour Webster ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="W" keyName="Webster" />
    </div>
  );
};
export default Webster;
