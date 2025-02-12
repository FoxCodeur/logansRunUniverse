import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const ChirurgienMarkJ = () => {
  const chirurgienData = data.C ? data.C["Chirurgien Mark J"] : null;

  if (!chirurgienData) {
    return (
      <div>Les données pour Chirurgien Mark.J ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="C" keyName="Chirurgien Mark J" />
    </div>
  );
};

export default ChirurgienMarkJ;
