let myName
console.log(myName)
console.log(typeof myName)

let greet = function (name) {
  if (name === undefined) {
    console.log('Please give us your name!')
  } else {
    console.log('Hello ' + name)
  }
}

greet(myName) // undefined arg

myName = 'alilo'
let greeting = greet(myName)

console.log(greeting) // undefined return type

let obj = {}
console.log(typeof obj.name)
obj.name = null
console.log(obj.name)
console.log(typeof obj.name)
