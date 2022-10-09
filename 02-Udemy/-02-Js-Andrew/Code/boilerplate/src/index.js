import square, { add, power } from './utils'
import toAllCaps from './challenge'

console.log(add(50, 50))
console.log(power(2, 10))
console.log(toAllCaps('hello js world!'))
console.log(square(100))

class Dev {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    return `Hello ${this.name}`
  }
}

const myName = 'alilo'
const dev = new Dev(myName)
console.log(dev.sayHello())
