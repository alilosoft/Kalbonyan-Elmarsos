const displayPuzzle = (puzzle) =>
  (document.querySelector('#puzzle').textContent = puzzle)

const displayResult = (result) =>
  (document.querySelector('#result').textContent = result)

const showError = (error) =>
  (document.querySelector('#error').textContent = error)

let hangman

const render = (game = hangman) => {
  game.showPuzzle(displayPuzzle)
  game.showResult(displayResult)
}

// play
window.addEventListener('keypress', (e) => {
  hangman.makeGuess(e.key)
  render()
  console.log(hangman.result)
})

const config = {
  wordCount: 2,
  get maxAttempts() {
    return this.wordCount * 3
  },
}

// start
const startGame = async () => {
  console.log('Starting new game...')
  const puzzle = await createPuzzleAsync(config.wordCount)
  hangman = new Hangman()
  hangman.start(puzzle, config.maxAttempts)
  render()
  console.log(hangman)
}

document.querySelector('#reset').onclick = startGame

startGame().catch(showError)
