import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const ComplexeCity = () => {
  const complexeCityData = data.C ? data.C["Complexe City"] : null;

  if (!complexeCityData) {
    return <div>Les données pour Complexe city ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Complexe City" />
    </div>
  );
};

export default ComplexeCity;
