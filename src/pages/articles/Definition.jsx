import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom"; // Import de useNavigate
import PropTypes from "prop-types";
import { formatTextWithLineBreaks } from "../../utils";
import "./Definition.scss";

const Definition = ({ section, keyName }) => {
  const [entryData, setEntryData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // Charger les données depuis le fichier JSON dans public avec async/await et try...catch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        const entry = data[section] ? data[section][keyName] : null;
        setEntryData(entry);

        // Si les données sont manquantes, redirige l'utilisateur
        if (!entry) {
          navigate("*");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        navigate("*");
      }
    };

    fetchData();
    // Ajout de section et keyName comme dependencies
  }, [section, keyName, navigate]);

  // Affichage du contenu si les données existent
  if (!entryData) {
    // Cette ligne n'est plus nécessaire, car la redirection se produit avant d'atteindre cette partie.
    return null;
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
      <h2 className="personnage">{titre}</h2>
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
  section: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
};

export default Definition;
