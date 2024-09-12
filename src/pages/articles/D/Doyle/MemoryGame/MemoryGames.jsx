import { useState, useEffect } from "react"; // 1. Importation des hooks useState et useEffect de React.
import shuffle from "./shuffle"; // 2. Importation de la fonction de mélange pour mélanger les cartes.
import "./MemoryGame.scss"; // 3. Importation du fichier de styles pour le composant.
import cardsData from "./memoryGame.json"; // 4. Importation des données des cartes à partir d'un fichier JSON.

const items = [
  cardsData.cardOne,
  cardsData.cardTwo,
  cardsData.cardThree,
  cardsData.cardFour,
  cardsData.cardFive,
  cardsData.cardSix,
]; // 5. Définition d'un tableau des cartes disponibles à partir des données importées.

// 6. Composant principal pour le jeu de mémoire.
const MemoryGames = () => {
  // 7. Déclarations des états avec useState pour gérer les différentes parties
  // du jeu.
  const [firstCard, setFirstCard] = useState(null); // 7.1. État pour la
  // première carte cliquée.
  const [secondCard, setSecondCard] = useState(null); // 7.2. État pour
  // la deuxième carte cliquée.
  const [remainingCards, setRemainingCards] = useState(
    shuffle([...items, ...items]) // 7.3. État pour les cartes restantes
    // (doubles mélangés).
  );
  const [moves, setMoves] = useState(0); // 7.4. État pour le nombre de
  // mouvements effectués.
  const [matchedCards, setMatchedCards] = useState([]); // 7.5. État pour
  // les cartes appariées.
  const [gameOver, setGameOver] = useState(false); // 7.6. État pour vérifier
  // si le jeu est terminé.
  const [endMessage, setEndMessage] = useState(""); // 7.7. État pour le
  // message de fin de partie.

  // 8. Fonction appelée lorsque l'utilisateur clique sur une carte.
  const handleClick = (index, value) => {
    // 8.1. Si deux cartes sont déjà cliquées, ne faites rien.
    if (firstCard && secondCard) return;

    // 8.2. Si aucune carte n'est sélectionnée, définir la première carte.
    if (!firstCard) {
      setFirstCard({ index, value });
    } else if (firstCard && !secondCard) {
      // 8.3. Si la première carte est sélectionnée mais pas la deuxième,
      // définir la deuxième carte.
      setSecondCard({ index, value });
      setMoves((prevMoves) => prevMoves + 1); // 8.4. Incrémenter le
      // compteur de mouvements.

      // 8.5. Si les deux cartes sélectionnées ont la même valeur, elles
      // sont appariées.
      if (firstCard.value.id === value.id) {
        setMatchedCards((prevMatchedCards) => [
          ...prevMatchedCards,
          firstCard.index,
          index,
        ]); // 8.6. Ajouter les cartes appariées à la liste des cartes
        // appariées.
        resetCards(); // 8.7. Réinitialiser les cartes sélectionnées.
      } else {
        // 8.8. Si les cartes ne correspondent pas, les retourner après une
        // courte pause.
        setTimeout(() => resetCards(), 1000); // Délai de 1 seconde avant
        // de réinitialiser les cartes.
      }
    }
  };

  // 9. Fonction pour réinitialiser les cartes sélectionnées.
  const resetCards = () => {
    setFirstCard(null); // 9.1. Réinitialiser la première carte.
    setSecondCard(null); // 9.2. Réinitialiser la deuxième carte.

    // 9.3. Vérifie si toutes les cartes sont appariées pour terminer le jeu.
    if (matchedCards.length === remainingCards.length) {
      setGameOver(true); // 9.4. Définit l'état de fin de jeu à vrai.
    }
  };

  // 10. Fonction pour démarrer un nouveau jeu.
  const startNewGame = () => {
    const shuffledItems = shuffle([...items, ...items]); // 10.1. Mélanger
    // les cartes pour un nouveau jeu.
    setRemainingCards(shuffledItems); // 10.2. Définir les cartes mélangées
    // comme cartes restantes.
    setFirstCard(null); // 10.3. Réinitialiser la première carte.
    setSecondCard(null); // 10.4. Réinitialiser la deuxième carte.
    setMoves(0); // 10.5. Réinitialiser le nombre de mouvements.
    setMatchedCards([]); // 10.6. Réinitialiser les cartes appariées.
    setGameOver(false); // 10.7. Réinitialiser l'état de fin de partie.
    setEndMessage(""); // 10.8. Réinitialiser le message de fin de partie.
  };

  // 11. useEffect pour vérifier si toutes les cartes sont appariées.
  useEffect(() => {
    if (matchedCards.length === remainingCards.length) {
      setGameOver(true); // 11.1. Définir l'état de fin de jeu à vrai si toutes les cartes sont appariées.
    }
  }, [matchedCards, remainingCards]);

  // 12. useEffect pour définir le message de fin de partie en fonction du
  // nombre de mouvements.
  useEffect(() => {
    if (gameOver) {
      if (moves <= 6) {
        setEndMessage("Bravo, limier !"); // 12.1. Message pour moins de 7
        // mouvements.
      } else if (moves <= 12) {
        setEndMessage("Pas mal !"); // 12.2. Message pour moins de 11
        // mouvements.
      } else {
        setEndMessage("Tu ne vaux pas mieux qu'un fugitif !"); // 12.3. Message
        // pour plus de 10 mouvements.
      }
    }
  }, [gameOver, moves]); // 12.4. Mise à jour de l'état endMessage lorsque
  // gameOver ou moves change.

  // 13. Rendu du composant.
  return (
    <>
      <div className="memoryGameContainer box_center">
        <div className="cardsContainer">
          {remainingCards.map((item, index) => (
            <div
              key={index}
              className={`cards ${
                firstCard?.index === index ||
                secondCard?.index === index ||
                matchedCards.includes(index)
                  ? "flipped"
                  : ""
              } box_center`}
              onClick={() => handleClick(index, item)}
            >
              <div className="frontSide"></div>
              <div className="backSide">
                <img
                  className="backsideImg"
                  src={
                    firstCard?.index === index ||
                    secondCard?.index === index ||
                    matchedCards.includes(index)
                      ? item.image
                      : cardsData.reverseCard.image
                  }
                  alt={`Card ${item.id}`}
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="movesCounter">Moves: {moves}</div>{" "}
        {/* 13.1. Affichage du nombre de mouvements. */}
        {gameOver && <div className="endMessage">{endMessage}</div>}{" "}
        {/* 13.2. Affichage du message de fin de jeu. */}
        {gameOver && (
          <button className="MemoryGameButton" onClick={startNewGame}>
            New Game {/* 13.3. Bouton pour démarrer un nouveau jeu. */}
          </button>
        )}
      </div>
    </>
  );
};

export default MemoryGames;
