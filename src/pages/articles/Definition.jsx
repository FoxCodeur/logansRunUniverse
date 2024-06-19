import React from "react";
import { NavLink } from "react-router-dom";
import "./Definition.scss";
import PropTypes from "prop-types";
import { formatTextWithLineBreaks } from "../../utils";

const Definition = ({ titre, image, rubriques }) => {
  // Destructuring des props passées au composant
  // titre: titre de la définition
  // image: URL de l'image associée à la définition
  // rubriques: objet contenant différentes rubriques liées à la définition
  return (
    <div className="definitions">
      <ol
        id="mise_en_forme_retour_sommaire"
        className="mise_en_forme_retour_sommaire_margin_left"
      >
        <li className="retour_sommaire">
          <NavLink to="/lexique">Sommaire</NavLink>
          <span className="separator"> /</span>
        </li>
        <li>{titre}</li>
      </ol>
      <h1 className="personnage">{titre}</h1>
      <section className="glossaire">
        <div className="illustration">
          <img alt={titre} src={image} className="borderAffiches" />
        </div>
        <div className="definition">
          <div>
            <span className="badge">Autres identités</span>{" "}
            <span className="badge_def">
              {rubriques.autres_identites || "N/A"}
            </span>
          </div>
          <div>
            <span className="badge">Catégorie</span>{" "}
            <span className="badge_def">{rubriques.categories}</span>
          </div>
          <div>
            <span className="badge">Apparitions</span>{" "}
            <span className="badge_def">{rubriques.apparition}</span>
          </div>
          <div>{formatTextWithLineBreaks(rubriques.contenu)}</div>
        </div>
      </section>
    </div>
  );
};

// Définition des PropTypes
Definition.propTypes = {
  titre: PropTypes.string.isRequired, // titre est une chaîne de caractères requise
  image: PropTypes.string.isRequired, // image est une chaîne de caractères requise
  rubriques: PropTypes.shape({
    autres_identites: PropTypes.string, // autres_identites est une chaîne de caractères optionnelle
    categories: PropTypes.string.isRequired, // categories est une chaîne de caractères requise
    apparition: PropTypes.string.isRequired, // apparition est une chaîne de caractères requise
    contenu: PropTypes.string.isRequired, // contenu est une chaîne de caractères requise
  }).isRequired, // rubriques est un objet avec les propriétés spécifiées ci-dessus, et il est requis
};

export default Definition;
