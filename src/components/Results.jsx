function Results({ results, restartGame, returnToSetup }) {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container justify-content-center">
          <img src="/logo.png"className="nav-logo"/>
        </div>
      </nav>

    <main className="results-screen">
      <div className="results-card text-center">
        <h1 className="results-title">Results</h1>

        <p>Correct Tiles: {results.correct}</p>
        <p>Incorrect Tiles: {results.incorrect}</p>
        <p>Missed Tiles: {results.missed}</p>
        <p>Accuracy: {results.accuracy}%</p>

        <div className="results-buttons">
          <button
            className="results-btn"
            onClick={restartGame}
          >
            Restart
          </button>

          <button
            className="results-btn secondary-btn"
            onClick={returnToSetup}
          >
            Game Setup
          </button>
        </div>
      </div>
    </main>
    </>
  );
}

export default Results;