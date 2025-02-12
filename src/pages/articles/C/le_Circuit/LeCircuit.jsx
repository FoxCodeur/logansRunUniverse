import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const LeCircuit = () => {
  // clé dans l'objet Le Circuit
  const leCircuitData = data.C ? data.C["Le Circuit"] : null;

  if (!leCircuitData) {
    return <div>Les données pour le circuit ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Le Circuit" />
    </div>
  );
};

export default LeCircuit;
