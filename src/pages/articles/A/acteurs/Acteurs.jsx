import React from "react";
import "./Acteurs.scss";
import { NavLink } from "react-router-dom";
import acteurs from "../../../../assets/images/images-générales/logans_run_actors.png";

const Acteurs = () => {
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
        <li>Les acteurs du film</li>
      </ol>

      <h1 className="personnage">Les acteurs du film</h1>

      <section className="glossaire">
        <div className="illustration">
          <img
            alt="les acteurs du film"
            src={acteurs}
            className="borderAffiches"
          />
        </div>

        <div className="definition">
          <span className="badge">Autres identités</span>{" "}
          <span className="badge_def"></span>
          <br />
          <span className="badge">Catégorie</span>{" "}
          <span className="badge_def">acteurs de cinéma</span>
          <br />
          <span className="badge">Apparitions</span>{" "}
          <span className="badge_def">film l'Âge de cristal, Logan's run</span>
          <br />
          <br />
          Jenny Agutter (VF : Pascale Brouillard) : Jessica 6
          <br />
          Michael York (VF : Philippe Étesse) : Logan 5<br />
          Richard Jordan (VF : Bernard Alane) : Francis 7<br />
          Michael Anderson Jr. (VF : François Leccia) : Doc
          <br />
          Gary Morgan : Billy Charming
          <br />
          Farrah Fawcett (VF : Jeanine Forney) : Holly
          <br />
          Peter Ustinov (VF : Roger Carel) : Ballard, le vieil homme
          <br />
          Roscoe Lee Browne : Box
          <br />
          Michelle Stacy : Mary 2<br />
          Camilla Carr (VF : Béatrice Delfe) : la femme du sanctuaire
          <br />
        </div>
      </section>
    </div>
  );
};

export default Acteurs;
