// 1. Importation des dépendances nécessaires
import React, { useEffect, useRef, useState } from "react"; // Importation des hooks React
import "./HomeSectionUn.scss";
import "../Home.scss";
import nouvelleEdition from "../../../assets/images/images-générales/logans_run_edition_mars_2019.png"; // Importation de l'image à afficher
import { LazyLoadImage } from "react-lazy-load-image-component"; // Importation du composant LazyLoadImage pour le chargement d'images paresseux
import "react-lazy-load-image-component/src/effects/blur.css"; // Importation de l'effet de flou pour le LazyLoadImage
import gsap from "gsap"; // Importation de GSAP pour les animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importation de ScrollTrigger pour les animations basées sur le défilement

// 2. Enregistrement du plugin ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

// 3. Définition du composant fonctionnel HomeSectionUn
const HomeSectionUn = () => {
  const spanRef = useRef(null); // Référence pour le span contenant le texte
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // État pour détecter la taille de l'écran (mobile ou non)

  // 4. Hook useEffect pour gérer le redimensionnement de la fenêtre
  useEffect(() => {
    // Fonction pour mettre à jour l'état selon la taille de l'écran
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Met à jour isMobile selon la largeur de la fenêtre
    };

    // 5. Ajout de l'écouteur d'événements pour le redimensionnement
    window.addEventListener("resize", handleResize);

    // 6. Nettoyage de l'écouteur lors de la destruction du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // L'effet ne s'exécute qu'une seule fois lors du montage

  // 7. Hook useEffect pour gérer l'animation du texte
  useEffect(() => {
    if (!isMobile) {
      // Vérifie si ce n'est pas un mobile
      const spanElement = spanRef.current; // Récupère l'élément référencé

      // 8. Animation GSAP avec ScrollTrigger
      gsap.fromTo(
        spanElement, // Cible de l'animation
        { opacity: 0, y: 50 }, // État initial (invisible et en bas)
        {
          opacity: 1, // État final (visible)
          y: 0, // Se déplace vers le haut
          duration: 5, // Durée de l'animation
          ease: "power3.out", // Type d'animation
          scrollTrigger: {
            // Configuration de ScrollTrigger
            trigger: spanElement, // Élément qui déclenche l'animation
            start: "top 90%", // L'animation commence quand le haut de l'élément atteint 90% de la fenêtre
            toggleActions: "play none none none", // Actions à exécuter (ici, seulement jouer)
          },
        }
      );
    }
  }, [isMobile]); // L'effet se déclenche lorsque isMobile change

  // 9. Rendu du composant
  return (
    <div className="sectionContainer">
      {" "}
      {/* Conteneur principal */}
      <div className="sectionUnGauche">
        {" "}
        {/* Colonne gauche */}
        <h2 className="fancy-undeline">Les Origines de l'oeuvre</h2>{" "}
        {/* Titre */}
        <div className="scroll-reveal">
          {" "}
          {/* Conteneur pour le texte qui apparaît */}
          <p>
            <span ref={spanRef}>
              {" "}
              {/* Span référencé pour l'animation */}
              <strong className="first-letter">B</strong>ien avant d’avoir été
              adapté au cinéma puis décliné en série TV à la fin des années 70,
              l’Âge de Cristal (Logan’s Run en anglais) a été un roman
              d’anticipation dystopique, coécrit par William F. Nolan et George
              Clayton Johnson. Le livre, publié en 1966, décrit notre société
              telle qu’elle pourrait évoluer dans un futur proche: à savoir vers
              un système totalitaire cybernétique où les jeunes, après avoir
              pris le pouvoir au 21e siècle, confient leur existence à un
              superordinateur nommé Le Penseur. Dès lors, aussi bien à cause de
              la surpopulation que pour éviter de placer leur destin entre les
              mains des personnes âgées, le nouveau gouvernement fixe un âge
              limite de vie. Nul homme sur terre ne sera désormais autorisé à
              vivre au-delà de ses 21 ans (La majorité aux États-Unis). Durant
              cette brève existence, l’individu, centré sur lui-même, se
              consacre uniquement au plaisir sous toutes ces formes, drogues,
              sexe etc... ne travaillent que ceux qui le souhaitent. Le Paradis
              sur Terre hein, pas vraiment car un détail vient troubler toute
              cette félicité: en effet, chaque citoyen se voit implanté dés la
              naissance dans sa paume droite, une fleur de vie. Le cristal,
              inviolable, change de couleur une fois par septennat. Blanc à la
              naissance celui-ci passe du jaune au bleu à l’âge de sept ans, du
              bleu vers le rouge à quatorze, puis vire rouge clignotant au
              Dernier-Jour et enfin devient noir si le contrevenant ne s’est pas
              présenté à la cérémonie pour accepter le «sommeil», suicide rituel
              par crémation.
            </span>
          </p>
        </div>
      </div>
      <div className="sectionUnDroite box_center">
        {" "}
        {/* Colonne droite */}
        <div className="afficheAgeDeCristal">
          {" "}
          {/* Conteneur pour l'image */}
          <LazyLoadImage
            className="nouvelleEdition"
            src={nouvelleEdition} // Image à afficher
            alt="nouvelle édition du roman Logan's run" // Texte alternatif pour l'accessibilité
            effect="blur" // Effet de flou lors du chargement
          />
        </div>
      </div>
    </div>
  );
};
export default HomeSectionUn;
