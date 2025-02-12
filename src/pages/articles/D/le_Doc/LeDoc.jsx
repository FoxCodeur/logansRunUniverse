import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeDoc = () => {
  const docData = data.D ? data.D["Doc"] : null;

  if (!docData) {
    return <div>Les données pour le Doc ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="D" keyName="Doc" />
    </div>
  );
};

export default LeDoc;
