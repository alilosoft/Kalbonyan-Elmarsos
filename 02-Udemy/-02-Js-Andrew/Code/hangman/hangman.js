class Hangman {
  constructor(word, maxAttempts) {
    this.status = 'playing'
    this.word = word.toLowerCase().split('')
    this.guess = []
    this.attempts = maxAttempts
  }

  showPuzzle(display = console.log) {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (letter === ' ' || this.guess.includes(letter)) {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    display(puzzle)
    return puzzle
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

  showResult(display = console.log) {
    if (this.status === 'playing') {
      display(`Playing...🤔 (${this.attempts} attempts left)`)
    } else if (this.status === 'finished') {
      display('Congratulations 🎉')
    } else {
      display(`Game Over 😭 (Mysterious word was: "${this.word.join('')}")`)
    }
  }
}
