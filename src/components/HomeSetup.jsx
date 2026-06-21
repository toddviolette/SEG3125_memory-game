import { useState } from "react";
import { difficultySettings } from "../utils/gameLogic";

function HomeSetup({ difficulty, setDifficulty, gridSize, setGridSize, startGame }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container justify-content-center">
          <img src="/logo.png"className="nav-logo"/>
        </div>
      </nav>

      <main>
        <section className="home-section container">
          <h1 className="welcome-title text-center">Welcome to Flash Recall!</h1>
          <p className="welcome-subtitle text-center">
            Train your memory by recalling the tiles before they fade away.
          </p>

          <div className="row align-items-center justify-content-center mt-5">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="instruction-card card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h2 className="fw-bold mb-3">How to Play</h2>

                  <ol className="instruction-list">
                    <li>Choose a difficulty and grid size.</li>
                    <li>Watch the tiles that flash on the board.</li>
                    <li>Remember their positions before they disappear.</li>
                    <li>Click the tiles you think were highlighted.</li>
                    <li>Submit your answer to complete the level.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img src="/logo.png" className="home-logo" />
            </div>
          </div>
        </section>

        <section className="setup-section container text-center">
          <h2 className="setup-title">Game Setup</h2>
          <p className="setup-subtitle">Choose your settings before starting.</p>

          <div className="setup-card mx-auto">
            <div className="mb-4">
              <h3 className="setup-label">Difficulty</h3>
              <div className="d-flex justify-content-center gap-3">
                <button 
                  className={`setup-btn ${difficulty === "Easy" ? "active-setup-btn" : ""}`}
                  onClick={() => setDifficulty("Easy")}
                >
                  Easy
                </button>
                <button 
                  className={`setup-btn ${difficulty === "Medium" ? "active-setup-btn" : ""}`}
                  onClick={() => setDifficulty("Medium")}
                >
                  Medium
                </button>
                <button 
                  className={`setup-btn ${difficulty === "Hard" ? "active-setup-btn" : ""}`}
                  onClick={() => setDifficulty("Hard")}
                >
                  Hard
                </button>
              </div>
              <p className="memorize-time">
              Time to Memorize:{" "}
              <span>
                {difficultySettings[difficulty] / 1000}s
              </span>
            </p>
            </div>

            <div className="mb-4">
              <h3 className="setup-label">Grid Size</h3>
              <div className="d-flex justify-content-center gap-3">
                <button 
                  className={`setup-btn ${gridSize === 3 ? "active-setup-btn" : ""}`}
                  onClick={() => setGridSize(3)}
                >
                  3 × 3
                </button>
                <button 
                  className={`setup-btn ${gridSize === 4 ? "active-setup-btn" : ""}`}
                  onClick={() => setGridSize(4)}
                >
                  4 × 4
                </button>
                <button 
                  className={`setup-btn ${gridSize === 5 ? "active-setup-btn" : ""}`}
                  onClick={() => setGridSize(5)}
                >
                  5 × 5
                </button>
              </div>
            </div>

            <div
              className="preview-grid mx-auto"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`
              }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, index) => (
                <div className="preview-tile" key={index}></div>
              ))}
            </div>

           <button className="start-game-btn" onClick={startGame}>Start Game</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomeSetup;