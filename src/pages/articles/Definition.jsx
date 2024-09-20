import React, { useState } from "react";
// Importation de la bibliothèque react-helmet-async pour gérer les méta-informations de la page,
// ce qui est important pour le référencement.
import { Helmet } from "react-helmet-async";
// Importation de NavLink depuis react-router-dom pour permettre la navigation entre les pages de l'application.
import { NavLink } from "react-router-dom";
import "./Definition.scss"; // Importation du fichier de styles SCSS spécifique au composant.
import PropTypes from "prop-types"; // Importation de PropTypes pour valider les types de props.
import { formatTextWithLineBreaks } from "../../utils"; // Importation d'une fonction utilitaire pour formater le texte.

const Definition = ({ titre, image, rubriques }) => {
  // Destructuration des props passées au composant
  // titre: titre de la définition
  // image: URL de l'image associée à la définition
  // rubriques: objet contenant différentes rubriques liées à la définition

  // État pour gérer le mode sombre avec useState, initialisé à false (mode clair).
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`definitions ${isDarkMode ? "dark" : ""}`}>
      {/* Utilisation de Helmet pour définir le titre et les méta-informations de la page */}
      <Helmet>
        <title>{`${titre} - Logan's Run`}</title>
        <meta
          name="description"
          content={`Découvrez tout ce qu'il faut connaitre sur ${titre}, à savoir son descriptif, degré d'importance dans l'univers de Logan's run, son apparitions mais aussi les différences qui peuvent exister selon les médias utilisés et plus encore.`}
        />
        <meta
          name="keywords"
          content={`${titre}, Logan's Run, Logan 5, Francis 7, Jessica 6, Carousel, City of Domes, The Sanctuary, Sandmen, Runners, dystopie, science-fiction, anticipation, univers futuriste, film de science-fiction`}
        />
      </Helmet>
      {/* Bouton pour basculer entre le mode sombre et le mode clair */}
      <button
        className="toggle-theme"
        onClick={() => setIsDarkMode(!isDarkMode)} // Inverse l'état du mode sombre
      >
        {isDarkMode ? "light mode" : "Dark mode"}{" "}
        {/* Texte du bouton en fonction du mode actuel */}
      </button>
      {/* Liste ordonnée pour afficher le sommaire et le titre de la définition */}
      <ol
        id="mise_en_forme_retour_sommaire"
        className="mise_en_forme_retour_sommaire_margin_left"
      >
        <li className="retour_sommaire">
          <NavLink to="/lexique">Sommaire</NavLink>{" "}
          {/* Lien de retour au sommaire */}
          <span className="separator"> /</span>
        </li>
        <li>{titre}</li> {/* Affichage du titre de la définition */}
      </ol>
      <h1 className="personnage">{titre}</h1>{" "}
      {/* Titre principal de la définition */}
      <section className="glossaire">
        <div className="illustration">
          <img alt={titre} src={image} className="borderAffiches" />{" "}
          {/* Image associée à la définition */}
        </div>
        <div className="definition">
          {/* Affichage des différentes rubriques liées à la définition */}
          <div className="badgeContainer">
            <span className="badge">Autres identités</span>{" "}
            <span className="badge_def">
              {rubriques.autres_identites || "N/A"}{" "}
              {/* Affiche "N/A" si aucune identité n'est fournie */}
            </span>
          </div>
          <div className="badgeContainer">
            <span className="badge">Catégorie</span>{" "}
            <span className="badge_def">{rubriques.categories}</span>{" "}
            {/* Affichage de la catégorie */}
          </div>
          <div className="badgeContainer">
            <span className="badge">Apparitions</span>{" "}
            <span className="badge_def">{rubriques.apparition}</span>{" "}
            {/* Affichage des apparitions */}
          </div>
          <div className="paddingContent">
            {formatTextWithLineBreaks(rubriques.contenu)}{" "}
            {/* Formattage du contenu avec des sauts de ligne */}
          </div>
        </div>
      </section>
    </div>
  );
};

// Définition des PropTypes pour assurer que les props reçues sont du bon type.
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

export default Definition; // Exportation du composant pour qu'il soit utilisé dans d'autres fichiers.
