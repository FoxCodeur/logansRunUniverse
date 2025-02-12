import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const Watchman = () => {
  const watchmanData = data.W ? data.W["Watchman"] : null;

  if (!watchmanData) {
    return <div>Les données pour Watchman ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="W" keyName="Watchman" />
    </div>
  );
};

export default Watchman;
