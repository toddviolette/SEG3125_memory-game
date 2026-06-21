import { useState } from "react";
import "./App.css";
import HomeSetup from "./components/HomeSetup";
import GameBoard from "./components/GameBoard";
import Results from "./components/Results";

function App() {
  const [screen, setScreen] = useState("home");

  const [difficulty, setDifficulty] = useState("Medium");
  const [gridSize, setGridSize] = useState(4);

  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    missed: 0,
    accuracy: 0,
  });

  function startGame() {
    setScreen("game");
  }

  function restartGame() {
    setScreen("game");
  }

  function returnToSetup() {
   setScreen("home");
  }

  return (
    <>
      {screen === "home" && (
        <HomeSetup
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          gridSize={gridSize}
          setGridSize={setGridSize}
          startGame={startGame}
        />
      )}

      {screen === "game" && (
        <GameBoard
          difficulty={difficulty}
          gridSize={gridSize}
          setResults={setResults}
          setScreen={setScreen}
        />
      )}

      {screen === "results" && (
        <Results
          results={results}
          restartGame={restartGame}
          returnToSetup={returnToSetup}
        />
      )}
    </>
  );
}

export default App;