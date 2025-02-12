import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Madison = () => {
  const madisonData = data.M ? data.M["Madison"] : null;

  if (!madisonData) {
    return <div>Les données pour Madison ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="M" keyName="Madison" />
    </div>
  );
};

export default Madison;
