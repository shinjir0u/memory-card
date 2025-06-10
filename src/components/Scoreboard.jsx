function Scoreboard({ score, bestScore }) {
  return (
    <div className="score-board">
      <p className="correct-click-count">Best Score: {bestScore}</p>
      <p className="correct-click-count">Score: {score}</p>
    </div>
  );
}

export default Scoreboard;
