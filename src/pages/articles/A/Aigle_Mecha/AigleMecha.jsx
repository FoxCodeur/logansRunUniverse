import React from "react";
import Definition from "../../Definition";
import data from "../../../../data.json";

const AigleMecha = () => {
  const aigleMechaData = data.A ? data.A["Mecha Eagle"] : null;

  if (!aigleMechaData) {
    return <div>Les données pour Aigle Mécha ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="A" keyName="Mecha Eagle" />
    </div>
  );
};

export default AigleMecha;
