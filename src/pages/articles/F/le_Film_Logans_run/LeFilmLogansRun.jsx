import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LeFilmLogansRun = () => {
  const filmData = data.F ? data.F["Film Logans run"] : null;

  if (!filmData) {
    return <div>Les données pour film Logans run ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition
        titre={filmData.titre}
        image={filmData.image}
        rubriques={filmData.rubriques}
      />
    </div>
  );
};

export default LeFilmLogansRun;
