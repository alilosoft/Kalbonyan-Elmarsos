let greetUser = function () {
  console.log('Hello there')
}

greetUser()

let fahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  return celsius
}

console.log(fahrenheitToCelsius(32))
console.log(fahrenheitToCelsius(68))
