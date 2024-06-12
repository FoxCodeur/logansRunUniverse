import React from "react";
import "./Acteurs.scss";
import { NavLink } from "react-router-dom";
import acteurs from "../../../../assets/images/images-générales/logans_run_actors.png";
import data from "../../../../data.json";
import { formatTextWithLineBreaks } from "../../../../utils";

const Acteurs = () => {
  const acteursData = data.A["acteurs du film"];
  return (
    <div className="acteurs">
      <ol
        id="mise_en_forme_retour_sommaire"
        className="mise_en_forme_retour_sommaire_margin_left"
      >
        <li className="retour_sommaire">
          <NavLink to="/lexique">Sommaire</NavLink>
          <span className="separator"> /</span>
        </li>
        <li>{acteursData.titre}</li>
      </ol>
      <h1 className="personnage">{acteursData.titre}</h1>
      <section className="glossaire">
        <div className="illustration">
          <img
            alt={acteursData.titre}
            src={acteursData.image}
            className="borderAffiches"
          />
        </div>

        <div className="definition">
          <div>
            <span className="badge">Autres identités</span>{" "}
            <span className="badge_def"></span>
          </div>
          <div>
            <span className="badge">Catégorie</span>{" "}
            <span className="badge_def">
              {acteursData.rubriques.categories}
            </span>
          </div>
          <div>
            <span className="badge">Apparitions</span>{" "}
            <span className="badge_def">
              {acteursData.rubriques.apparition}
            </span>
          </div>
          <div>{formatTextWithLineBreaks(acteursData.rubriques.contenu)}</div>
        </div>
      </section>
    </div>
  );
};

export default Acteurs;
