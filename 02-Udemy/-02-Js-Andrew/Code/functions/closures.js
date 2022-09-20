const myFunction = () => {
  const myMessage = 'Hello Closure'
  const printMessage = () => console.log(myMessage)
  return printMessage
}

const myPrintFunction = myFunction()
myPrintFunction()

//
const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },

    decrement() {
      count--
    },

    get value() {
      return count
    },
  }
}

const counter = createCounter()

console.log(counter)
console.log(counter.value)
counter.increment()
console.log(counter.value)
counter.increment()
counter.value = 5
console.log(counter.value)
