export const difficultySettings = {
  Easy: 3000,
  Medium: 2000,
  Hard: 1000,
};

export function generatePattern(gridSize) {
  const totalTiles = gridSize * gridSize;
  const numberToHighlight = gridSize + 1;

  const pattern = [];

  while (pattern.length < numberToHighlight) {
    const randomIndex = Math.floor(Math.random() * totalTiles);

    if (!pattern.includes(randomIndex)) {
      pattern.push(randomIndex);
    }
  }

  return pattern;
}

export function calculateResults(highlightedTiles, selectedTiles) {
  const correct = selectedTiles.filter(tile =>
    highlightedTiles.includes(tile)
  ).length;

  const incorrect = selectedTiles.filter(tile =>
    !highlightedTiles.includes(tile)
  ).length;

  const missed = highlightedTiles.filter(tile =>
    !selectedTiles.includes(tile)
  ).length;

  const accuracy = Math.round(
    (correct / highlightedTiles.length) * 100
  );

  return {
    correct,
    incorrect,
    missed,
    accuracy,
  };
}