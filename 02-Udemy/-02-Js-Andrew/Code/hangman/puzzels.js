// with callbacks
const createPuzzleWithCallbacks = (
  wordCount,
  startGame,
  onError = console.log
) => {
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

// with promise
const createPuzzleWithPromise = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=' + wordCount)
    request.onload = (e) => {
      if (e.target.status === 200) {
        const puzzleWord = JSON.parse(e.target.responseText).puzzle
        resolve(puzzleWord)
      } else {
        reject(`Error📛: ${e.target.status} | ${e.target.responseText}`)
      }
    }
    request.onerror = reject
    request.send()
  })

// with fetch api
const createPuzzle = (wordCount) =>
  fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw Error('Unable to fetch a puzzle')
      }
    })
    .then((json) => json.puzzle)

createPuzzle(5)
  .then((puzzle) => console.log(`Puzzle: ${puzzle.toLowerCase()}`))
  .catch((err) => console.error(`📛Error: ${err}`))
