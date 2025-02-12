import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Jaq = () => {
  const jaqData = data.J ? data.J["Jaq"] : null;

  if (!jaqData) {
    return <div>Les données pour Jaq ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="J" keyName="Jaq" />
    </div>
  );
};

export default Jaq;
