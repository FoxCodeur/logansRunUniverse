import React from "react";
import Definition from "../../Definition";
import data from "../../../../data.json";
// on crée un composant générique vers lequel toutes les définitions vont se rediriger
const Acteurs = () => {
  // Vérification si data.A existe avant d'accéder à "acteurs du film"
  // ternaire
  const acteursData = data.A ? data.A["acteurs du film"] : null;
  // Si les données ne sont pas disponibles, affiche un message d'erreur
  if (!acteursData) {
    return <div>Les données pour Aigle Mécha ne sont pas disponibles.</div>;
  }
  // Sinon, affiche le composant Definition avec les données disponibles
  return (
    <Definition
      titre={acteursData.titre}
      image={acteursData.image}
      rubriques={acteursData.rubriques}
    />
  );
};

export default Acteurs;
