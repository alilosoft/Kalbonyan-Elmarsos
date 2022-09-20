class Hangman {
  constructor(word, maxAttempts) {
    this.status = 'playing'
    this.word = word.toLowerCase().split('')
    this.guess = []
    this.attempts = maxAttempts
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
      return `Playing...🤔 (${this.attempts} attempts left)`
    } else if (this.status === 'finished') {
      return 'Congratulations 🎉'
    } else {
      return `Game Over 😭 (the word was: "${this.word.join('')}")`
    }
  }

  showResult(display = console.log) {
    display(this.result)
  }
}
