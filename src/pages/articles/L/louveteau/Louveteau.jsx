import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Louveteau = () => {
  const louveteaudData = data.L ? data.L["Louveteau"] : null;

  if (!louveteaudData) {
    return <div>Les données pour Louveteau roman ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="L" keyName="Louveteau" />
    </div>
  );
};
export default Louveteau;
