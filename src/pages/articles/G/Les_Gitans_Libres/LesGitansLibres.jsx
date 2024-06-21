import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const LesGitansLibres = () => {
  const gitanslibresData = data.G ? data.G["Les Gitans Libres"] : null;

  if (!gitanslibresData) {
    return (
      <div>Les données pour les gitans libres ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition
        titre={gitanslibresData.titre}
        image={gitanslibresData.image}
        rubriques={gitanslibresData.rubriques}
      />
    </div>
  );
};

export default LesGitansLibres;
