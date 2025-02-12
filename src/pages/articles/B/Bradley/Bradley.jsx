import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Bradley = () => {
  const bradleyData = data.B ? data.B["Bradley"] : null;

  if (!bradleyData) {
    return <div>Les données pour Bradley ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="B" keyName="Bradley" />
    </div>
  );
};

export default Bradley;
