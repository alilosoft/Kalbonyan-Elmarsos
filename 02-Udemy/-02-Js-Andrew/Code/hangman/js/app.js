const showError = (error) =>
  (document.querySelector('#error').textContent = error)

let hangman

const puzzleEl = document.querySelector('#puzzle')
const resultEl = document.querySelector('#result')

const render = (game = hangman) => {
  puzzleEl.innerHTML = ''
  game.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
  resultEl.textContent = game.result
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
