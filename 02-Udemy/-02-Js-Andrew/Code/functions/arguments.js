let add = function (a, b) {
  return a + b
}

let sum = add(15, 5)
console.log(sum)

// default args

let scoreTxt = function (name = 'Anonymous', score = 0) {
  return 'PLayer: ' + name + ' - Score: ' + score
}

console.log(scoreTxt())
console.log(scoreTxt('alilo', 100))
console.log(scoreTxt(undefined, 100))

let calcTip = function (total, tipPercent = 0.2) {
  return total * tipPercent
}

console.log(calcTip(100))
console.log(calcTip(undefined))
console.log(calcTip(100, 0.15))
