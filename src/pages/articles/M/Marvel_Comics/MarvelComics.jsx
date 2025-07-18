import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
const MarvelComics = () => {
  const marvelData = data.M ? data.M["Marvel Comics"] : null;

  if (!marvelData) {
    return <div>Les données pour Marvel Comics ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="M" keyName="Marvel Comics" />
    </div>
  );
};

export default MarvelComics;
