import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const AdventureComics = () => {
  // console.log("Data: ", data); // Pour vérifier les données importées
  const adventureData = data.A ? data.A["Adventure comics"] : null;
  // console.log("Adventure Data: ", adventureData); // Pour vérifier les données de Adventure comics

  if (!adventureData) {
    return (
      <div>Les données pour Adventure comics ne sont pas disponibles.</div>
    );
  }

  return (
    <div>
      <Definition section="A" keyName="Adventure comics" />
    </div>
  );
};

export default AdventureComics;
