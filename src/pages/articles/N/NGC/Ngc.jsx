import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ngc = () => {
  const ngcData = data.N ? data.N["NGC"] : null;

  if (!ngcData) {
    return <div>Les données pour NGC ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="N" keyName="NGC" />
    </div>
  );
};

export default Ngc;
