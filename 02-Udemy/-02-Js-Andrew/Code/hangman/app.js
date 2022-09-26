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

const startGame = (puzzleWord) => {
  game.start(puzzleWord, maxAttempts)
  game.showPuzzle(displayPuzzle)
  game.showResult(displayResult)
  console.log(game)
}

createPuzzleV2(wordCount).then(startGame).catch(displayResult)
