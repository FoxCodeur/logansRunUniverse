import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../context/DataContext"; // Import du contexte
import "./SectionDataList.scss";

const SectionDataList = () => {
  // Accès aux données globales via le contexte
  const { data } = useContext(DataContext);

  if (!data) {
    return <p className="error-message">Chargement des données...</p>;
  }

  // Extraction des titres des définitions disponibles
  const titles = Object.values(data)
    .flatMap(Object.values)
    .map((item) => item.titre);

  return (
    <>
      {/* Liste des titres sous forme de liens */}
      <ul className="grid-list-search">
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <li className="list-search-style" key={index}>
              {/* Génère une URL propre pour chaque titre */}
              <NavLink to={`/${title.toLowerCase().replace(/ /g, "-")}`}>
                {title}
              </NavLink>
            </li>
          ))
        ) : (
          <p>Aucune définition disponible.</p>
        )}
      </ul>
      {/* Séparateur visuel */}
      <div className="tiret"></div>
    </>
  );
};

export default SectionDataList;
