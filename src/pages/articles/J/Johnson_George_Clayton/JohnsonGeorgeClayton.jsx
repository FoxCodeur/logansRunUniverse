import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const JohnsonGeorgeClayton = () => {
  const johnsonecrivainData = data.J ? data.J["George Clayton Johnson"] : null;

  if (!johnsonecrivainData) {
    return (
      <div>
        Les données pour George Clayton Johnson ne sont pas disponibles.
      </div>
    );
  }

  return (
    <div>
      <Definition section="J" keyName="George Clayton Johnson" />
    </div>
  );
};

export default JohnsonGeorgeClayton;
