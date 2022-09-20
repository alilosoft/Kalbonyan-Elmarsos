const createPuzzle = (wordCount, startGame, onError = console.log) => {
  const request = new XMLHttpRequest()
  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=' + wordCount)
  request.onload = (e) => {
    if (e.target.status === 200) {
      const puzzleWord = JSON.parse(e.target.responseText).puzzle
      startGame(puzzleWord)
    } else {
      onError(`Error: ${e.target.status} | ${e.target.responseText}`)
    }
  }
  request.onerror = onError
  request.send()
}
