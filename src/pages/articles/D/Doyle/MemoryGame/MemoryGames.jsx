import { useState, useEffect } from "react";
import shuffle from "./shuffle";
import "./MemoryGame.scss";
import cardsData from "./memoryGame.json";

const items = [
  cardsData.cardOne,
  cardsData.cardTwo,
  cardsData.cardThree,
  cardsData.cardFour,
  cardsData.cardFive,
  cardsData.cardSix,
];

const MemoryGames = () => {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [remainingCards, setRemainingCards] = useState(
    shuffle([...items, ...items])
  );
  const [moves, setMoves] = useState(0);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [endMessage, setEndMessage] = useState("");

  const handleClick = (index, value) => {
    console.log("Card clicked:", { index, value });

    if (firstCard && secondCard) return;

    if (!firstCard) {
      console.log("First card set:", { index, value });
      setFirstCard({ index, value });
    } else if (firstCard && !secondCard) {
      console.log("Second card set:", { index, value });
      setSecondCard({ index, value });
      setMoves((prevMoves) => prevMoves + 1); // Utilisation de la fonction de mise à jour d'état pour garantir l'incrémentation correcte
      console.log("Moves incremented:", moves + 1);

      if (firstCard.value.id === value.id) {
        console.log("Match found:", { firstCard, secondCard });
        setMatchedCards((prevMatchedCards) => [
          ...prevMatchedCards,
          firstCard.index,
          index,
        ]);
        resetCards();
      } else {
        console.log("No match, resetting cards...");
        setTimeout(() => resetCards(), 1000);
      }
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    console.log("Cards reset");

    if (matchedCards.length === remainingCards.length) {
      setGameOver(true);
      console.log("Game Over! Moves:", moves);
    }
  };

  const startNewGame = () => {
    const shuffledItems = shuffle([...items, ...items]);
    setRemainingCards(shuffledItems);
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setMatchedCards([]);
    setGameOver(false);
    setEndMessage("");
    console.log("New game started");
  };

  useEffect(() => {
    if (matchedCards.length === remainingCards.length) {
      setGameOver(true);
      console.log("All cards matched. Game Over set to true.");
    }
  }, [matchedCards, remainingCards]);

  useEffect(() => {
    if (gameOver) {
      if (moves <= 6) {
        setEndMessage("Bravo, vous êtes un limier !");
      } else if (moves <= 10) {
        setEndMessage("Pas mal !");
      } else {
        setEndMessage("Tu ne vaux pas mieux qu'un fugitif !");
      }
      console.log("End Message Set:", endMessage);
    }
  }, [gameOver, moves]); // Mise à jour de l'état endMessage lorsque gameOver ou moves change

  useEffect(() => {
    console.log("Game Over State:", gameOver);
    console.log("End Message:", endMessage);
  }, [gameOver, endMessage]);

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
        <div className="movesCounter">Moves: {moves}</div>
        {gameOver && <div className="endMessage">{endMessage}</div>}
        {gameOver && (
          <button className="MemoryGameButton" onClick={startNewGame}>
            New Game
          </button>
        )}
      </div>
    </>
  );
};

export default MemoryGames;
