// src/components/Article.jsx
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { formatTextWithLineBreaks } from "../../utils";

const Article = ({ article }) => {
  return (
    <div className="article">
      <ol
        id="mise_en_forme_retour_sommaire"
        className="mise_en_forme_retour_sommaire_margin_left"
      >
        <li className="retour_sommaire">
          <NavLink to="/lexique">Sommaire</NavLink>
          <span className="separator"> /</span>
        </li>
        <li>{article.titre}</li>
      </ol>
      <h1 className="personnage">{article.titre}</h1>
      <section className="glossaire">
        <div className="illustration">
          <img
            alt={article.titre}
            src={article.image}
            className="borderAffiches"
          />
        </div>
        <div className="definition">
          <div>
            <span className="badge">Autres identités</span>
            <span className="badge_def">
              {article.rubriques.autres_identites}
            </span>
          </div>
          <div>
            <span className="badge">Catégorie</span>
            <span className="badge_def">{article.rubriques.categories}</span>
          </div>
          <div>
            <span className="badge">Apparitions</span>
            <span className="badge_def">{article.rubriques.apparition}</span>
          </div>
          <div>{formatTextWithLineBreaks(article.rubriques.contenu)}</div>
        </div>
      </section>
    </div>
  );
};
Article.propTypes = {
  article: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rubriques: PropTypes.shape({
      autres_identites: PropTypes.string,
      categories: PropTypes.string,
      apparition: PropTypes.string,
      contenu: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Article;
