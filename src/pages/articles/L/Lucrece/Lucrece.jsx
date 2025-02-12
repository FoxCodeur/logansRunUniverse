import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Lucrece = () => {
  const lucreceData = data.L ? data.L["Lucrèce"] : null;

  if (!lucreceData) {
    return <div>Les données pour Lucrèce ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="L" keyName="Lucrèce" />
    </div>
  );
};

export default Lucrece;
