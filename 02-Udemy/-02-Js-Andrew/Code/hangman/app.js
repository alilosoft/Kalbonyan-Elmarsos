const displayPuzzle = (puzzle) =>
  (document.querySelector('#puzzle').textContent = puzzle)

const displayResult = (result) =>
  (document.querySelector('#result').textContent = result)

const game = new Hangman()

// play
window.addEventListener('keypress', (e) => {
  game.makeGuess(e.key)
  game.showPuzzle(displayPuzzle)
  game.showResult(displayResult)
  console.log(game.puzzle)
  console.log(game.result)
})

// start
const wordCount = 2
const maxAttempts = wordCount * 3

const request = new XMLHttpRequest()
request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=' + wordCount)
request.onload = (e) => {
  if (e.target.status === 200) {
    const puzzle = JSON.parse(e.target.responseText).puzzle
    game.start(puzzle, maxAttempts)
    game.showPuzzle(displayPuzzle)
    game.showResult(displayResult)
    console.log(game)
  } else {
    console.log(`Error: ${e.target.status} | ${e.target.responseText}`)
  }
}

request.send()
