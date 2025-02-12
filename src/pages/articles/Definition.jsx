import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { formatTextWithLineBreaks } from "../../utils";
import data from "../../../public/data.json"; // Importation de données depuis le fichier JSON

import "./Definition.scss";

const Definition = ({ section, keyName }) => {
  // Récupération dynamique des données depuis data.json en utilisant les props section et keyName
  const entryData = data[section] ? data[section][keyName] : null;

  if (!entryData) {
    return <div>Les données pour {keyName} ne sont pas disponibles.</div>;
  }

  const { titre, image, rubriques } = entryData; // Déstructuration des données

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`definitions ${isDarkMode ? "dark" : ""}`}>
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
      <button
        className="toggle-theme"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "light mode" : "Dark mode"}
      </button>
      <ol
        id="mise_en_forme_retour_sommaire"
        className="mise_en_forme_retour_sommaire_margin_left"
      >
        <li className="retour_sommaire">
          <NavLink to="/lexique">Sommaire</NavLink>{" "}
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
          <div className="badgeContainer">
            <span className="badge">Autres identités</span>{" "}
            <span className="badge_def">
              {rubriques.autres_identites || "N/A"}
            </span>
          </div>
          <div className="badgeContainer">
            <span className="badge">Catégorie</span>{" "}
            <span className="badge_def">{rubriques.categories}</span>
          </div>
          <div className="badgeContainer">
            <span className="badge">Apparitions</span>{" "}
            <span className="badge_def">{rubriques.apparition}</span>
          </div>
          <div className="paddingContent">
            {formatTextWithLineBreaks(rubriques.contenu)}
          </div>
        </div>
      </section>
    </div>
  );
};

Definition.propTypes = {
  section: PropTypes.string.isRequired, // Section est une chaîne de caractères requise
  keyName: PropTypes.string.isRequired, // keyName est une chaîne de caractères requise
};

export default Definition;
