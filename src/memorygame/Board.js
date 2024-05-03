import React, { useState, useEffect } from "react";
import Data from "./Data";
import { motion } from "framer-motion";
import Card from "./Card";

function GameBoard() {
  const [cardsArray, setCardsArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [won, setWon] = useState(0);

  useEffect(() => {
    NewGame();
  }, []);
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  function NewGame() {
    setTimeout(() => {
      const randomOrderArray = Data.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray);
      setMoves(0);
      setFirstCard(null);
      setSecondCard(null);
      setWon(0);
    }, 1200);
  }

  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  }

  return (
    <div className="container ">
      <motion.div
        className="text-center mt-10 text-6xl font-bold max-sm:text-4xl max-md:text-6xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
         <span className="text-black italic font-normal mb-10"> Memory Game</span> <br /> {" "}
        <span className="text-stroke"></span>
      </motion.div>
      <div className="text-sm text-center max-sm:text-xs text-white px-4 py-2 m-4 border border-gray-600 bg-black rounded-full w-fit mx-auto backdrop-blur-sm bg-opacity-90">
        Fitness Playground ⛹️‍♂️
      </div>

      <div className="board">
        {cardsArray.map((item) => (
          <Card
            item={item}
            key={item.id}
            handleSelectedCards={handleSelectedCards}
            toggled={item === firstCard || item === secondCard || item.matched === true}
            stopflip={stopFlip}
          />
        ))}
      </div>

      {won !== 6 ? (
        <div className="comments">Moves : {moves}</div>
      ) : (
        <div className="comments">???????? You Won in {moves} moves ????????</div>
      )}
      <button className="button md:mb-10 mt-10" onClick={NewGame}>
        New Game
      </button>
    </div>
  );
}

export default GameBoard;
