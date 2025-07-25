import React from "react"; // Importation des hooks React
import "./HomeSectionUn.scss";
import "../Home.scss";
import nouvelleEdition from "@/assets/images/images-générales/logans_run_edition_mars_2019.webp"; // Importation de l'image à afficher
import { LazyLoadImage } from "react-lazy-load-image-component"; // Importation du composant LazyLoadImage pour le chargement d'images paresseux
import "react-lazy-load-image-component/src/effects/blur.css"; // Importation de l'effet de flou pour le LazyLoadImage

// 2. Définition du composant fonctionnel HomeSectionUn
const HomeSectionUn = () => {
  // 3. Rendu du composant
  return (
    <div className="sectionContainer">
      {" "}
      {/* Conteneur principal */}
      <section className="sectionUnGauche">
        {" "}
        {/* Colonne gauche */}
        <h2 className="fancy-undeline">Les Origines de l'oeuvre</h2>{" "}
        {/* Titre */}
        <div className="scroll-reveal">
          {" "}
          {/* Conteneur pour le texte qui apparaît */}
          <p>
            <strong className="first-letter">B</strong>ien avant d’avoir été
            adapté au cinéma puis décliné en série TV à la fin des années 70,
            l’Âge de Cristal (Logan’s Run en anglais) a été un roman
            d’anticipation dystopique, coécrit par William F. Nolan et George
            Clayton Johnson. Le livre, publié en 1966, décrit notre société
            telle qu’elle pourrait évoluer dans un futur proche: à savoir vers
            un système totalitaire cybernétique où les jeunes, après avoir pris
            le pouvoir au 21e siècle, confient leur existence à un
            superordinateur nommé Le Penseur. Dès lors, aussi bien à cause de la
            surpopulation que pour éviter de placer leur destin entre les mains
            des personnes âgées, le nouveau gouvernement fixe un âge limite de
            vie. Nul homme sur terre ne sera désormais autorisé à vivre au-delà
            de ses 21 ans (La majorité aux États-Unis). Durant cette brève
            existence, l’individu, centré sur lui-même, se consacre uniquement
            au plaisir sous toutes ces formes, drogues, sexe etc... ne
            travaillent que ceux qui le souhaitent. Le Paradis sur Terre hein,
            pas vraiment car un détail vient troubler toute cette félicité: en
            effet, chaque citoyen se voit implanté dés la naissance dans sa
            paume droite, une fleur de vie. Le cristal, inviolable, change de
            couleur une fois par septennat. Blanc à la naissance celui-ci passe
            du jaune au bleu à l’âge de sept ans, du bleu vers le rouge à
            quatorze, puis vire rouge clignotant au Dernier-Jour et enfin
            devient noir si le contrevenant ne s’est pas présenté à la cérémonie
            pour accepter le «sommeil», suicide rituel par crémation.
          </p>
        </div>
      </section>
      <div className="sectionUnDroite">
        {" "}
        {/* Colonne droite */}
        <div className="afficheAgeDeCristal">
          {" "}
          {/* Conteneur pour l'image */}
          <LazyLoadImage
            className="nouvelleEdition"
            src={nouvelleEdition}
            alt="nouvelle édition du roman Logan's run"
            width={440}
            height={677}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionUn;
