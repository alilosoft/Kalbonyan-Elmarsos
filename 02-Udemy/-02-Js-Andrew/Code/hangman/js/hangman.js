class Hangman {
  constructor() {
    this.status = 'playing'
    this.guess = []
  }

  start(word, maxAttempts = 3) {
    this.word = word.toLowerCase().split('')
    this.attempts = maxAttempts
  }

  get puzzleWord() {
    return this.word.join('')
  }

  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (letter === ' ' || this.guess.includes(letter)) {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  showPuzzle(display = console.log) {
    display(this.puzzle)
  }

  makeGuess(letter) {
    //todo: validate input
    if (this.status === 'playing') {
      const guess = letter.toLowerCase()
      if (!this.guess.includes(guess)) {
        this.guess.push(guess)
        if (!this.word.includes(guess)) {
          this.attempts--
          if (this.attempts === 0) {
            this.status = 'failed'
          }
        } else {
          const finished = this.word.every(
            (letter) => letter === ' ' || this.guess.includes(letter)
          )
          if (finished) {
            this.status = 'finished'
          }
        }
      }
    }
  }

  get result() {
    if (this.status === 'playing') {
      return `Type your guess...🤔 (${this.attempts} attempts left)`
    } else if (this.status === 'finished') {
      return 'Congratulations 🎉'
    } else {
      return `Game Over 😭 (the word was: "${this.puzzleWord}")`
    }
  }

  showResult(display = console.log) {
    display(this.result)
  }
}
