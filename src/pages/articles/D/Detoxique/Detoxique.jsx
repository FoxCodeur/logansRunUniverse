import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Detoxique = () => {
  const detoxiqueData = data.D ? data.D["Detoxique"] : null;

  if (!detoxiqueData) {
    return <div>Les données pour Detoxique ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="D" keyName="Detoxique" />
    </div>
  );
};

export default Detoxique;
