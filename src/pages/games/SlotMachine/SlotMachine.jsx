import React, { useState } from "react";
// Importation de React et du hook useState pour gérer l'état des composants.
import "./SlotMachine.scss";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Importation du composant LazyLoadImage pour le chargement paresseux des images.
import "react-lazy-load-image-component/src/effects/blur.css"; // Importation des effets de flou pour le chargement des images.
import cashMachine from "@/assets/images/slotMachine/cashMachine.webp";
import icone1 from "@/assets/images/slotMachine/01.webp";
import icone2 from "@/assets/images/slotMachine/02.webp";
import icone3 from "@/assets/images/slotMachine/03.webp";
import icone4 from "@/assets/images/slotMachine/04.webp";
import icone5 from "@/assets/images/slotMachine/05.webp";
import icone6 from "@/assets/images/slotMachine/06.webp";
import icone7 from "@/assets/images/slotMachine/07.webp";
import icone8 from "@/assets/images/slotMachine/08.webp";
import icone9 from "@/assets/images/slotMachine/09.webp";

// Liste des icônes symbolisant les symboles de la machine à sous.
const symbols = [
  icone1,
  icone2,
  icone3,
  icone4,
  icone5,
  icone6,
  icone7,
  icone8,
  icone9,
];

// Déclaration du composant SlotMachine
const SlotMachine = () => {
  // États pour gérer les rouleaux, les points et le message d'état
  const [reel1, setReel1] = useState(icone1); // État pour le premier rouleau, initialisé avec icone1.
  const [reel2, setReel2] = useState(icone1); // État pour le deuxième rouleau, initialisé avec icone1.
  const [reel3, setReel3] = useState(icone1); // État pour le troisième rouleau, initialisé avec icone1.
  const [points, setPoints] = useState(0); // État pour le score du joueur, initialisé à 0.
  const [message, setMessage] = useState(""); // État pour le message affiché au joueur.
  // Fonction pour faire tourner les rouleaux
  const spinReels = () => {
    // Sélection de trois symboles aléatoires pour les rouleaux
    const random1 = symbols[Math.floor(Math.random() * symbols.length)];
    const random2 = symbols[Math.floor(Math.random() * symbols.length)];
    const random3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Mise à jour des états des rouleaux avec les nouveaux symboles
    setReel1(random1);
    setReel2(random2);
    setReel3(random3);

    // Vérification du score en fonction des symboles concordants
    if (random1 === random2 && random2 === random3) {
      setPoints(points + 2); // Incrémentation de 2 points si tous les symboles sont identiques
      setMessage("Bravo ! Les trois symboles concordent !"); // Message de victoire
    } else if (
      random1 === random2 ||
      random1 === random3 ||
      random2 === random3
    ) {
      setPoints(points + 1); // Incrémentation de 1 point si deux symboles sont identiques
      setMessage("Bien joué ! Deux symboles concordent."); // Message de succès
    } else {
      setMessage("Dommage ! Réessayez."); // Message de défaite
    }
  };

  // Rendu du composant
  return (
    <div className="slotMachineContainer boxesColumnCenter">
      {/* Conteneur principal de la machine à sous */}
      <h1>Slot Machine</h1> {/* Titre de la machine à sous */}
      <div className="boxAndButton boxesColumnCenter">
        {/* Conteneur pour la machine et le bouton */}
        <LazyLoadImage
          className="boxMachine_img" // Classe pour l'image de la machine
          src={cashMachine} // Source de l'image de la machine à sous
          alt="image de la machine à sous" // Texte alternatif pour l'image
          effect="blur" // Effet de flou lors du chargement de l'image
        />
        <div className="reels">
          {/* Conteneur pour les rouleaux */}
          <LazyLoadImage className="reel" src={reel1} alt="Rouleau 1" />{" "}
          {/* Premier rouleau */}
          <LazyLoadImage className="reel" src={reel2} alt="Rouleau 2" />{" "}
          {/* Deuxième rouleau */}
          <LazyLoadImage className="reel" src={reel3} alt="Rouleau 3" />{" "}
          {/* Troisième rouleau */}
        </div>
        <button className="casino-button" onClick={spinReels}>
          {/* Bouton pour faire tourner les rouleaux */}
          Spin {/* Texte du bouton */}
        </button>
        <div className="game-counter">
          {/* Conteneur pour le compteur de points */}
          <span className="digit">{points}</span>{" "}
          {/* Affichage des points du joueur */}
        </div>
        <p>{message}</p> {/* Affichage du message d'état */}
      </div>
    </div>
  );
};

// Exportation du composant SlotMachine pour utilisation dans d'autres fichiers
export default SlotMachine;
// fonctionnement du jeu slot machine.

// 1. Initialisation de l'état :
// Trois rouleaux sont initialisés avec le même symbole par défaut.
// Un compteur de points commence à 0.
// Un message vide est prêt à être mis à jour en fonction du résultat du jeu.

// 2. Déclenchement du jeu :
// Lorsque le joueur appuie sur le bouton "Spin", la fonction principale du jeu se déclenche.

// 3. Génération aléatoire des symboles :
// Trois symboles aléatoires sont sélectionnés pour les trois rouleaux parmi une liste
// prédéfinie d'icônes. (il y en a 9)

// 4. Mise à jour des rouleaux :
//Les images des rouleaux sont mises à jour avec les nouveaux symboles sélectionnés.

// 5. Vérification des résultats :
//Le jeu compare les trois symboles pour vérifier s'ils sont identiques ou si deux symboles
// concordent.
//Si les trois symboles sont identiques, le joueur reçoit 2 points.
//Si seulement deux symboles correspondent, le joueur reçoit 1 point.
//Si aucun symbole n'est pareil, le joueur ne gagne aucun point.

// 6. Affichage du message :
//En fonction du résultat, un message est affiché pour informer le joueur du succès ou de
// l'échec de sa tentative.

// 7. Mise à jour des points :
//Le compteur de points est mis à jour en fonction des résultats obtenus
// (deux ou trois symboles concordants).

// 8. Affichage final :
//Après chaque tour, le message et le compteur de points sont affichés pour le joueur,
// lui permettant de suivre son score et de voir le résultat de chaque tentative.

//L'algorithme suit ce cycle chaque fois que le bouton "Spin" est cliqué, offrant une
// nouvelle chance au joueur de gagner des points.
