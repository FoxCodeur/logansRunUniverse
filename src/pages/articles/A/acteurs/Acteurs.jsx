import React from "react";
import Definition from "../../Definition";
import data from "../../../../data.json";
import SliderMovieActors from "./sliderMovieActors/SliderMovieActors";
import "./Acteurs.scss";
import TypeWritterActors from "./TypeWritterActors/TypeWritterActors";

// On crée un composant générique vers lequel toutes les définitions vont se rediriger
const Acteurs = () => {
  // Vérification si data.A existe avant d'accéder à "acteurs du film"
  const acteursData = data.A ? data.A["acteurs du film"] : null;

  // Si les données ne sont pas disponibles, affiche un message d'erreur
  if (!acteursData) {
    return (
      <div>Les données pour les acteurs du film ne sont pas disponibles.</div>
    );
  }

  // Sinon, affiche le composant Definition avec les données disponibles
  return (
    <div className="acteurs-wrapper">
      <Definition section="A" keyName="acteurs du film" />
      <SliderMovieActors />
      <TypeWritterActors />
    </div>
  );
};

export default Acteurs;
