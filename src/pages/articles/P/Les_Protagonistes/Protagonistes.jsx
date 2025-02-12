import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Protagonistes = () => {
  const protagonistesData = data.P ? data.P["Protagonistes"] : null;

  if (!protagonistesData) {
    return <div>Les données pour Protagonistes ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="P" keyName="Protagonistes" />
    </div>
  );
};

export default Protagonistes;
