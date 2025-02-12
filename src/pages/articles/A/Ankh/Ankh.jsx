import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Ankh = () => {
  const ankhData = data.A ? data.A["Ankh"] : null;

  if (!ankhData) {
    return <div>Les données pour Ankh ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="A" keyName="Ankh" />
    </div>
  );
};

export default Ankh;
