import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Francis = () => {
  const francisData = data.F ? data.F["Francis"] : null;

  if (!francisData) {
    return <div>Les données pour Francis ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="F" keyName="Francis" />
    </div>
  );
};

export default Francis;
