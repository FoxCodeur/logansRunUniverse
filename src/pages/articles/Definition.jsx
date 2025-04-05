import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import PropTypes from "prop-types";
import { formatTextWithLineBreaks } from "../../utils";
import "./Definition.scss";

const Definition = ({ section, keyName }) => {
  const { getDefinition, isDarkMode, toggleDarkMode } = useContext(DataContext);
  const navigate = useNavigate();
  const entryData = getDefinition(section, keyName);

  // Gestion de la redirection dans un useEffect
  useEffect(() => {
    if (!entryData) {
      navigate("*", { replace: true });
    }
  }, [entryData, navigate]);

  if (!entryData) {
    return <div className="loading-state">Chargement en cours...</div>;
  }

  const { titre, image, rubriques } = entryData;

  return (
    <div className={`definitions ${isDarkMode ? "dark" : ""}`}>
      <Helmet>
        <title>{`${titre} - Logan's Run`}</title>
        <meta
          name="description"
          content={`Découvrez tout ce qu'il faut connaitre sur ${titre}, à savoir son descriptif, degré d'importance dans l'univers de Logan's run, son apparitions mais aussi les différences qui peuvent exister selon les médias utilisés et plus encore.`}
        />
      </Helmet>

      <button className="toggle-theme" onClick={toggleDarkMode}>
        {isDarkMode ? "light mode" : "Dark mode"}
      </button>

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

      <h2 className="personnage">{titre}</h2>

      <section className="glossaire">
        <div className="illustration">
          <img
            alt={titre}
            src={image}
            className="borderAffiches"
            loading="lazy"
          />
        </div>

        <div className="definition">
          <div className="badgeContainer">
            <span className="badge">Autres identités</span>
            <span className="badge_def">
              {rubriques.autres_identites || "N/A"}
            </span>
          </div>

          <div className="badgeContainer">
            <span className="badge">Catégorie</span>
            <span className="badge_def">{rubriques.categories}</span>
          </div>

          <div className="badgeContainer">
            <span className="badge">Apparitions</span>
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
  section: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
};

export default Definition;
