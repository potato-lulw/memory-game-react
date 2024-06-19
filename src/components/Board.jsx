import React, { useEffect, useState, useRef } from "react";
import SingleCard from "./SingleCard";

const fruits = [
  { src: "./images/apple.png", matched: false },
  { src: "./images/banana.png", matched: false },
  { src: "./images/lychee.png", matched: false },
  { src: "./images/mango.png", matched: false },
  { src: "./images/watermelon.png", matched: false },
  { src: "./images/orange.png", matched: false },
];

const Board = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [clickOne, setClickOne] = useState(null);
  const [clickTwo, setClickTwo] = useState(null);

  const successAudioRef = useRef(new Audio("./sounds/success.mp3"));
  const errorAudioRef = useRef(new Audio("./sounds/error.mp3"));
  const gameOverAudioRef = useRef(new Audio("./sounds/gameover.mp3"));

  const shuffleFruits = () => {
    const shuffledFruits = [...fruits, ...fruits]
      .sort(() => Math.random() - 0.5)
      .map((fruit) => ({ ...fruit, id: Math.random() }));
    return shuffledFruits;
  };

  const handleNewGameClick = () => {
    const shuffledFruits = shuffleFruits();
    setCards(shuffledFruits);
    setTurns(0);
    setClickOne(null);
    setClickTwo(null);
    // console.log(shuffledFruits, turns);
  };

  const handleCardClick = (card) => {
    // console.log(card);
    clickOne ? setClickTwo(card) : setClickOne(card);
  };

  useEffect(() => {
    if (clickOne && clickTwo) {
      if (clickOne.src === clickTwo.src) {
        console.log("Match");
        successAudioRef.current.play();
        setCards((prevCards) => {
          const updatedCards = prevCards.map((card) => {
            if (card.src === clickOne.src) {
              return {
                ...card,
                matched: true,
              };
            } else return card;
          });

          const allMatched = updatedCards.every((card) => card.matched);
          if (allMatched) {
            gameOverAudioRef.current.play();
          }

          return updatedCards;
        });

        resetTurn();
      } else {
        console.log("No match");
        errorAudioRef.current.play();
        resetTurn();
      }
    }
  }, [clickOne, clickTwo]);

  useEffect(() => {
    let allTrue = false;
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i].matched === false) {
        allTrue = false;
        break;
      } else allTrue = true;
    }
    if (allTrue) gameOverAudioRef.current.play();
  }, [clickOne, clickTwo]);

  const resetTurn = () => {
    setTimeout(() => {
      setClickOne(null);
      setClickTwo(null);
    }, 500);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleNewGameClick}
        className="px-2 py-1 bg-red-500 rounded-md w-fit my-6 font-semibold"
      >
        New Game
      </button>
      <div className="grid grid-flow-row grid-cols-4 gap-4 my-2">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              handleCardClick={handleCardClick}
              card={card}
              flipped={card === clickOne || card === clickTwo || card.matched}
            />
          );
        })}
      </div>
      <p className="text-lg">Turns - {turns}</p>
    </div>
  );
};

export default Board;
