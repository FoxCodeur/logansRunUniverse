import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Jonath = () => {
  const jonathData = data.J ? data.J["Jonath"] : null;

  if (!jonathData) {
    return <div>Les données pour Jonath ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="J" keyName="Jonath" />
    </div>
  );
};

export default Jonath;
