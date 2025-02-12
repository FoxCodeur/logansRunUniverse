import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LogansRunRoman = () => {
  const logansrunnovelData = data.L ? data.L["Logans run roman"] : null;

  if (!logansrunnovelData) {
    return (
      <div>Les données pour Logans run roman ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="L" keyName="Logans run roman" />
    </div>
  );
};

export default LogansRunRoman;
