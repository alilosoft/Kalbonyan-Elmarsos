const square = function (x) {
  return x * x
}
square(5) //=

const squareArrow = (x) => x * x
squareArrow(9) //=

const people = [
  {
    name: 'alilo',
    age: 38,
  },
  {
    name: 'omar',
    age: 35,
  },
  {
    name: 'ahmed',
    age: 25,
  },
  {
    name: 'aicha',
    age: 6,
  },
]

const under30 = people.filter((p) => p.age < 30)
console.log(under30)

// part 2

// binding arguments
const add = function (a, b) {
  console.log(arguments)
  return arguments[0] + arguments[1]
}
console.log(add(15, 20, 35, 40))
// arrow functions doesn't bind arguments

const me = {
  name: 'alilo',
  country: 'Algeria',
  intro() {
    return `I'm ${this.name} from ${this.country}`
  },
  introArrow: () => `I'm ${this.name} from ${this.country}`,
}

console.log(me.intro()) //= I'm alilo from Algeria
console.log(me.introArrow()) //= I'm undefined from undefined
