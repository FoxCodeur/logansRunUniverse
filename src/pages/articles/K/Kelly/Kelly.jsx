import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Kelly = () => {
  const kellyData = data.K ? data.K["Kelly"] : null;

  if (!kellyData) {
    return <div>Les données pour Kelly ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="K" keyName="Kelly" />
    </div>
  );
};

export default Kelly;
