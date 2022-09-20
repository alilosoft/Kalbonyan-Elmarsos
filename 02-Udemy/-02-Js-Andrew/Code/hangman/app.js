const displayPuzzle = (puzzle) =>
  (document.querySelector('#puzzle').textContent = puzzle)

const displayResult = (result) =>
  (document.querySelector('#result').textContent = result)

const game = new Hangman('alilo soft', 3)
game.showPuzzle(displayPuzzle)
game.showResult(displayResult)

window.addEventListener('keypress', (e) => {
  game.makeGuess(e.key)
  game.showPuzzle(displayPuzzle)
  game.showResult(displayResult)
  // show in console
  game.showPuzzle()
  game.showResult()
})
