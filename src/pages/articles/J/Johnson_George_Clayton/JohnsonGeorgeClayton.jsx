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
      <Definition
        titre={johnsonecrivainData.titre}
        image={johnsonecrivainData.image}
        rubriques={johnsonecrivainData.rubriques}
      />
    </div>
  );
};

export default JohnsonGeorgeClayton;
