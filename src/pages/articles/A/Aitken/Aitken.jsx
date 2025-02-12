import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Aitken = () => {
  const aikenData = data.A ? data.A["Aitken"] : null;
  if (!aikenData) {
    return <div>Les données pour Aitken ne sont pas disponibles.</div>;
  }
  return <Definition section="A" keyName="Aitken" />;
};
export default Aitken;
