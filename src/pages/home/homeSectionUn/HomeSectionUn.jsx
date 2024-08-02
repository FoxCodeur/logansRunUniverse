import "./HomeSectionUn.scss";
import "../Home.scss";
import nouvelleEdition from "../../../assets/images/images-générales/logans_run_edition_mars_2019.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeSectionUn = () => {
  return (
    <div className="sectionContainer">
      <div className="sectionUnGauche">
        <h2 className="fancy-undeline">Les Origines de l'oeuvre</h2>
        <div className="scroll-reveal">
          <p>
            <span>
              Bien avant d’avoir été adapté au cinéma puis décliné en série TV à
              la fin des années 70, l’Âge de Cristal (Logan’s Run en anglais) a
              été un roman d’anticipation dystopique, coécrit par William F.
              Nolan et George Clayton Johnson. Le livre, publié en 1966, décrit
              notre société telle qu’elle pourrait évoluer dans un futur proche:
              à savoir vers un système totalitaire cybernétique où les jeunes,
              après avoir pris le pouvoir au 21e siècle, confient leur existence
              à un superordinateur nommé Le Penseur. Dès lors, aussi bien à
              cause de la surpopulation que pour éviter de placer leur destin
              entres les mains des personnes âgées, le nouveau gouvernement fixe
              un âge limite de vie. Nul homme sur terre ne sera désormais
              autorisé à vivre au-delà de ses 21 ans (La majorité aux
              États-Unis). Durant cette brève existence, l’individu, centré sur
              lui-même, se consacre uniquement au plaisir sous toutes ces
              formes, drogues, sexe etc... ne travaillent que ceux qui le
              souhaitent. Le Paradis sur Terre hein, pas vraiment car un détail
              vient troubler toute cette félicité: en effet, chaque citoyen se
              voit implanté dés la naissance dans sa paume droite, une fleur de
              vie. Le cristal, inviolable, change de couleur une fois par
              septennat. Blanc à la naissance celui-ci passe du jaune au bleu à
              l’âge de sept ans, du bleu vers le rouge à quatorze, puis vire
              rouge clignotant au Dernier-Jour et enfin devient noir si le
              contrevenant ne s’est pas présenté à la cérémonie pour accepter le
              «sommeil», suicide rituel par crémation.{" "}
            </span>
          </p>
        </div>
        {/* --------------------------------------------------------------- */}
      </div>
      <div className="sectionUnDroite">
        <div className="afficheAgeDeCristal">
          {/* En utilisant LazyLoadImage avec l'effet opacity, vos images
       l'image est chargées de manière différée et s'affiche à mesure que
      l'on scrolle. */}
          <LazyLoadImage
            className="nouvelleEdition"
            src={nouvelleEdition}
            alt="nouvelle édition du roman Logan's run"
            loading="lazy" // Ajout de l'attribut loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionUn;
