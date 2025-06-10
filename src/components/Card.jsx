import { useState } from "react";
import Giphy from "./Giphy";
import "/src/styles/Card.css";

function Card({ name, onGameOver, onCorrectClick }) {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) onGameOver();
    else {
      setClicked(true);
      onCorrectClick();
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <Giphy name={name} />
      <p className="card__name game-over-text">{name}</p>
    </div>
  );
}

export default Card;
