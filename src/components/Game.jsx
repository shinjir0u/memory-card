import { useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import Dialog from "./Dialog";
import "/src/styles/Game.css";

function Game({ characters, bestScore, onRetry, onBestScore }) {
  const [isGameOver, setGameOver] = useState(false);
  const [correctClicks, setCorrectClicks] = useState(0);

  let message = "";
  if (isGameOver) message = "You lose.";
  else if (correctClicks === characters.length) message = "You Win.";
  if (message !== "") document.querySelector(".dialog").showModal();
  onBestScore(correctClicks);

  return (
    <div className="game container">
      <h1 className="game__title">Memory Card</h1>
      <p className="game__instruction">
        Earn points by clicking on cards but only one click per card is allowed.
      </p>

      <Scoreboard score={correctClicks} bestScore={bestScore} />

      <div className="cards">
        {characters
          .map((character) => (
            <Card
              name={character}
              key={character}
              onGameOver={() => setGameOver(true)}
              onCorrectClick={() => setCorrectClicks(correctClicks + 1)}
            />
          ))
          .sort(() => Math.random() - 0.5)}
      </div>
      <Dialog message={message} onRetry={onRetry} />
    </div>
  );
}

export default Game;
