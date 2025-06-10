import { useState } from "react";
import Game from "./Game";
import "/src/styles/App.css";

const CHARACTERS = [
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Boruto Uzumaki",
  "Kakashi Hatake",
  "Tsunade",
  "Obito Uchiha",
  "Itachi Uchiha",
  "Madara Uchiha",
];

function App() {
  const [gameKey, setGameKey] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <Game
        characters={CHARACTERS}
        key={gameKey}
        bestScore={bestScore}
        onRetry={() => setGameKey(!gameKey)}
        onBestScore={(score) =>
          score <= 8 && score > bestScore && setBestScore(score)
        }
      />
    </div>
  );
}

export default App;
