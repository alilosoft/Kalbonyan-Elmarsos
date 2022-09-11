let num = 125.55

console.log(num.toFixed(3))
console.log(num.toFixed(5))
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// generate random number between two values
let min = 10
let max = 20
let random = Math.floor(Math.random() * (max - min)) + min
console.log(random)

// challenge
console.log('--------------------------')

let makeGuess = function (guess) {
  return Math.ceil(Math.random() * 5) === guess
}

console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))
