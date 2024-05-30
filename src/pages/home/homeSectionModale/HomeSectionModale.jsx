import React from "react";
import "./HomeSectionModale.scss";
import "../Home.scss";

const HomeSectionModale = () => {
  const handleClick = (event) => {
    event.preventDefault(); // Empêche le comportement de défilement par défaut
    document.getElementById("demo").style.visibility = "visible"; // Affiche le modal
    document.getElementById("demo").style.opacity = "1"; // Affiche le modal
  };
  return (
    <div className="marginUpDownContainer box_center">
      <div className="modalPadding">
        <a href="#demo" onClick={handleClick}>
          les déclinaisons du héro Logan...
        </a>
      </div>

      <div id="demo" className="modal">
        <div className="modal_content">
          <p>
            Dans le roman "Logan's Run", le protagoniste Logan est un "Sandman",
            policier chargé de traquer les personnes qui refusent de se
            soumettre à la loi qui les contraint à mourir euthanasiés à l'âge de
            21 ans. Dans le livre et le film, Logan a pour mission de trouver le
            mythique "Sanctuaire", lieu inconnu des machines où vivraient les
            dissidents au système. Dans le roman, Logan simule sa fuite aux yeux
            de ses collègues et à l'approche du dernier jour, il ambitionne de
            trouver le Sanctuaire. Massacrer ceux qui y vivent serait à ses yeux
            une apothéose. Dans le film, il accepte la mission de THINKER mais
            reste peu enthousiaste à l'idée de retrouver ce Sanctuaire qu'il ne
            connaît pas. Dans tous les cas, Logan se prend d'affection pour
            Jessica, une jeune femme qui cherche également à échapper à la mort
            programmée, et son amour pour elle le pousse à remettre en question
            le système qui régit leur société. Sa quête pour découvrir la vérité
            sur le Sanctuaire et pour sauver Jessica met en évidence les aspects
            positifs de sa personnalité, montrant qu'il est capable de remettre
            en question sa propre condition et de se rebeller contre un ordre
            établi oppressif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionModale;
