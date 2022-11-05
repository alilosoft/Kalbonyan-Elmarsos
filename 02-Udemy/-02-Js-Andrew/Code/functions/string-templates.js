let name = 'alilo'
let job = 'web dev'

let intro = `Hi I'm ${name}, an aspiring ${job}`

console.log(intro)

// challenge

let formatTip = function (total, tipPercent = 0.2) {
  let tip = total * tipPercent
  return `${tipPercent * 100}% of $${total} would be $${tip}`
}

console.log(formatTip(160))
console.log(formatTip(undefined))
console.log(formatTip(250, 0.15))
