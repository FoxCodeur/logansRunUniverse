import React from "react";
//importation du composant NavLink de la bibliothèque react-router-dom, utilisé
// pour créer des liens de navigation.
import { NavLink } from "react-router-dom";
//importation de la bibliothèque prop-types, utilisée pour vérifier les types
//des propriétés passées aux composants.
import PropTypes from "prop-types";
import "./SectionDataList.scss";
// Déclaration du composant fonctionnel SectionDataList qui prend pour seul
// argument 'data'. Cet argument est déstructuré, ce qui signifit que seuls
// les champs 'data' de l'objet passé en argument seront utilisés dans la
// fonction.
const SectionDataList = ({ data }) => {
  //Crée un tableau vide appelé titles. Ce tableau sert à stocker
  //les titres extraits des données fournies.
  const titles = [];
  Object.keys(data).forEach((key) => {
    const items = data[key];

    // Itérer sur chaque clé de l'objet items
    Object.keys(items).forEach((itemKey) => {
      // Ajouter le titre correspondant à titles
      titles.push(items[itemKey].titre);
    });
  });

  console.log("Contenu de data :", data);
  console.log("Titres extraits :", titles);

  // Vérifier si des titres ont été extraits ou s'il y a une erreur
  if (titles.length === 0) {
    titles.push("Définitions non disponibles");
  }

  return (
    <>
      {/*${title.toLowerCase()} la méthode toLowerCase() convertit les majuscules
    en minuscules. Cela permet de normaliser les titres du fait que
    les URLs sont en minuscules.
    .replace(/ /g, "-") Cela remplace tous les espaces par des tirets dans le
    titre, en utilisant la méthode replace(). C'est une pratique courante
    pour créer des URLs conviviales pour les moteurs de recherche, car les
    espaces ne sont pas autorisés dans les URLs.
    (/ /g, "-")}`} les deux barres obliques entourent le motif que nous voulons
    rechercher et remplacer. l'indicateur g (global), indique que toutes les 
    occurences du motif dans la chaine doivent être remplacées.
    "-" : C'est le caractère de remplacement. Dans cet exemple, chaque espace
    trouvé dans la chaîne sera remplacé par un tiret (-).
     */}
      <ul className="grid-list-search">
        {titles.map((title, index) => (
          <li className="list-search-style" key={index}>
            <NavLink to={`/${title.toLowerCase().replace(/ /g, "-")}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

SectionDataList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SectionDataList;
