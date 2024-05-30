import React from "react";
import "./HomeSectionSix.scss";
import "../homeSectionUn/HomeSectionUn.scss";
import "../Home.scss";
import maquetteUn from "../../../assets/images/images-générales/maquetteCityOne.png";
import maquetteDeux from "../../../assets/images/images-générales/maquetteCityTwo.png";
const HomeSectionSix = () => {
  return (
    <div className="sectionContainer">
      <div className="sectionUnGauche">
        <h2 className="fancy-undeline">De somptueux décors</h2>
        <p>
          Le tournage va durer trois mois. La maquette de la Cité des Dômes fut
          à son époque l’une des plus imposantes jamais construites. En ce qui
          concerne les séquences intérieures de la Cité, les prises de vue ont
          essentiellemnt eu lieu à Dallas au Texas. Voici la liste des
          différents lieux de tournage : Dallas Market Center, Apparel Mart &
          Hullen Mall Fort Worth C’est dans ce gigantesque centre commercial
          qu’ont été filmées la majorité des séquences d’ARCADE. Au cœur de
          l’Apparel Mart se trouve le Hall dans lequel se déroule l’entrée de la
          cérémonie du Carrousel, mais aussi la traque du fugitif par Francis et
          Logan. Le lieu s'utilise habituellement pour les expositions diverses,
          défilés de mode, il faut dire que ses dimensions sont assez
          conséquentes : 110 mètres de long sur 60 mètres de large pour une
          hauteur de 24 mètres, soient 5 niveaux. Des centaines de figurants
          peuvent donc y prendre place sans aucun problème. Zales Jewelers
          International Headquarters, Downtown Dallas Le quartier Général des
          limiers est en réalité le siège social des Bijoutiers Zales, situé à
          Dallas, sur l’Intestat 35. Tous les plans sur lesquels on aperçoit des
          limiers entrants et sortant du bâtiment ont été tournés au pied du
          véritable building à Dallas. Le tournage en extérieur a d’ailleurs
          causé certains désagréments à la production : le chef opérateur
          remarqua le fait que des nuages se reflétaient sur les vitres, ce qui
          est anormal pour une cité située sous un dôme opaque. Les nuages ont
          donc été gommés en postproduction.... Les plans intérieurs ont été
          quant à eux exécutés dans les Studios de la MGM. Water Gardens, Fort
          Worth Cette séquence a été filmée quasiment en début de tournage du
          film. Les Water Gardens se situent à Fort Worth près de Dallas…en
          plein centre-ville, et non sur une plage comme montré dans le film! Il
          y a plusieurs techniques de cache qui sont utilisées pour masquer les
          buildings alentour: une plage a été filmée et intégrée au plan en
          toile de fond, et un mate painting sera ajouté sur la droite du plan
          pour dissimuler certains détails et notamment agrandir les Water
          Gardens.
          <br /> <br />{" "}
          <span className="grasParagraphe"> Autres lieux de tournage:</span>
          <br />
          <br /> •{" "}
          <span className="grasParagraphe">
            Arlington Health Center National Health Studio:
          </span>
          gymnase des limiers <br /> •{" "}
          <span className="grasParagraphe">
            Oz Restaurant Night-club, Dallas:
          </span>
          Salle d’Amour…
          <br /> •{" "}
          <span className="grasParagraphe">Burton Park Building, Dallas:</span>
          quartiers Résidentiels
          <br /> •{" "}
          <span className="grasParagraphe">World Trade Mart, Dallas:</span>
          Autres Salles et Couloirs de la Cité des Dômes{" "}
        </p>
      </div>
      <div className="sectionUnDroite">
        <div className="cityMaquetContainer">
          <div className="cityMaquetBorder">
            <img className="cityMaquet" src={maquetteUn} alt="" />
          </div>
          <div className="cityMaquetBorder">
            <img className="cityMaquet" src={maquetteDeux} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSix;
