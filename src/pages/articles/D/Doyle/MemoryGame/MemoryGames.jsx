import { useState } from "react"; // 1. Importation du hook useState depuis React pour gérer l'état
import shuffle from "./shuffle"; // 2. Importation de la fonction de mélange pour les cartes
import "./MemoryGame.scss"; // 3. Importation des styles pour le jeu de mémoire
import cardsData from "./memoryGame.json"; // 4. Importation des données des cartes depuis un fichier JSON

// 5. Création d'un tableau avec les données des cartes
const items = [
  cardsData.cardOne,
  cardsData.cardTwo,
  cardsData.cardThree,
  cardsData.cardFour,
  cardsData.cardFive,
  cardsData.cardSix,
];

// 6. Duplication et mélange des cartes pour le jeu avec la fonction shuffle
const allItems = shuffle([...items, ...items]);

const MemoryGames = () => {
  // 7. Déclaration des états du composant
  const [firstCard, setFirstCard] = useState(null); // État pour la
  //première carte sélectionnée.
  const [secondCard, setSecondCard] = useState(null); // État pour
  // la deuxième carte sélectionnée.
  const [remainingCards, setRemainingCards] = useState(allItems); // État
  // pour les cartes restantes à afficher.
  const [moves, setMoves] = useState(0); // État pour le compteur de coups.
  const [matchedCards, setMatchedCards] = useState([]); // État pour les
  // cartes qui ont été trouvées.

  // 8. Fonction appelée lors du clic sur une carte
  const handleClick = (index, value) => {
    // 9. Empêche la sélection de nouvelles cartes si deux cartes sont déjà sélectionnées
    if (firstCard && secondCard) return;

    // 10. Si aucune carte n'est sélectionnée, sélectionne la première carte
    if (!firstCard) {
      setFirstCard({ index, value });
    } else if (firstCard && !secondCard) {
      // 11. Sélectionne la deuxième carte et incrémente le compteur de coups
      setSecondCard({ index, value });
      setMoves(moves + 1);

      // 12. Vérifie si les deux cartes sélectionnées sont identiques
      if (firstCard.value.id === value.id) {
        // 13. Si identiques, ajoute les indices des cartes correspondantes à l'état des cartes trouvées
        setMatchedCards([...matchedCards, firstCard.index, index]);
        resetCards(); // Réinitialise les cartes sélectionnées
      } else {
        // 14. Si non identiques, réinitialise les cartes après un délai de 1 seconde
        setTimeout(() => resetCards(), 1000);
      }
    }
  };

  // 15. Fonction pour réinitialiser les cartes sélectionnées
  const resetCards = () => {
    setFirstCard(null); // Réinitialise la première carte
    setSecondCard(null); // Réinitialise la deuxième carte
  };

  return (
    <>
      <div className="memoryGameContainer box_center">
        {" "}
        {/* 16. Conteneur principal du jeu de mémoire */}
        <div className="cardsContainer">
          {" "}
          {/* 17. Conteneur des cartes */}
          {remainingCards.map((item, index) => (
            <div
              key={index} // 18. Identifiant unique pour chaque carte
              className={`cards ${
                firstCard?.index === index ||
                secondCard?.index === index ||
                matchedCards.includes(index)
                  ? "flipped"
                  : ""
              } box_center`} // 19. Application de la classe CSS pour les cartes retournées
              onClick={() => handleClick(index, item)} // 20. Appelle handleClick lors du clic sur une carte
            >
              <div className="frontSide">
                {/* 21. Face avant de la carte : vide ou avec un motif */}
              </div>
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
                  alt={`Card ${item.id}`} // 22. Texte alternatif pour l'image
                  style={{ width: "150px", height: "150px" }} // 23. Styles en ligne pour la largeur et la hauteur
                />
              </div>
            </div>
          ))}
        </div>
        <div className="movesCounter">Moves: {moves}</div>{" "}
        {/* 24. Affiche le nombre de coups */}
      </div>
    </>
  );
};

export default MemoryGames; // 25. Exportation du composant pour l'utiliser ailleurs
