import { useEffect, useState } from "react";
import {
  difficultySettings,
  generatePattern,
  calculateResults,
} from "../utils/gameLogic";

function GameBoard({ difficulty, gridSize, setResults, setScreen }) {

  const [phase, setPhase] = useState("countdown");
  const [countdown, setCountdown] = useState(3);
  const [highlightedTiles, setHighlightedTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);

  useEffect(() => {
    if (phase !== "countdown") return;

    if (countdown === 0) {
      setHighlightedTiles(generatePattern(gridSize));
      setPhase("showing");
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(countdown - 1); }, 1000);

    return () => clearTimeout(timer);
    }, [countdown, phase, gridSize]);


  useEffect(() => {
    if (phase !== "showing") return;

    const timer = setTimeout(() => {
      setPhase("recall"); }, difficultySettings[difficulty]);

    return () => clearTimeout(timer);
    }, [phase, difficulty]);


  function handleTileClick(index) {
    if (phase !== "recall") return;

    if (selectedTiles.includes(index)) {
      setSelectedTiles(selectedTiles.filter((tile) => tile !== index));
      
    } else {
      setSelectedTiles([ ...selectedTiles, index,]);
    }
  }

  function submitAnswer() {
    const results = calculateResults(highlightedTiles, selectedTiles);

    setResults(results);
    setScreen("results");
  }

  return (
    <main className="game-screen">
      <div className="container text-center">
        <h1 className="game-title">Flash Recall</h1>

        {phase === "countdown" && (
          <p className="game-info">Get ready... {countdown}</p>
        )}

        {phase === "showing" && (
          <p className="game-info">Memorize the highlighted tiles!</p>
        )}

        {phase === "recall" && (
          <p className="game-info">Select the tiles you remember.</p>
        )}

        <div
          className="game-grid mx-auto"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, index) => (
            <button
              className={`game-tile
                ${
                  phase === "showing" &&
                  highlightedTiles.includes(index) ? "highlighted-tile": ""
                }
                ${
                  selectedTiles.includes(index) ? "selected-tile": ""
                }`}

              key = {index}
              onClick = {() => handleTileClick(index)}
            ></button>
          ))}
        </div>
        {phase === "recall" && (
          <button className="submit-btn mt-4" onClick={submitAnswer}>
            Submit Answer
          </button>
        )}
      </div>
    </main>
  );
}

export default GameBoard;