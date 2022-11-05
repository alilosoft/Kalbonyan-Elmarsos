// Global scope
// Local Scope: fahrenheit, celsius

let fahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  return celsius
}

console.log(fahrenheitToCelsius(32))
console.log(fahrenheitToCelsius(68))
