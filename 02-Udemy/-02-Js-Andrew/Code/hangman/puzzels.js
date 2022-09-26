// with callbacks
const createPuzzleV1 = (wordCount, startGame, onError = console.log) => {
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
const createPuzzleV2 = (wordCount) =>
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

createPuzzleV2(5).then(console.log, console.error)
