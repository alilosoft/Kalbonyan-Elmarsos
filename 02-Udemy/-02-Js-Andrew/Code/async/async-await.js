// async functions always returns a Promise object
// that resolve with the function return value
// and rejects if the function throws an error
const helloPromise = async (name) => {
  if (typeof name === 'string') {
    return `Hello ${name} in Async World`
  } else {
    throw new Error('You must provide a name')
  }
}

console.log(helloPromise('alilo'))
helloPromise('alilo').then(console.log).catch(console.error)

helloPromise(123).then(console.log).catch(console.error)

const calcSquare = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num * num)
      } else {
        reject('Please provide a number')
      }
    }, 500)
  })

// async/await in action
const showSquares4Times = async (num) => {
  let square = await calcSquare(num)
  console.log(`${num} x ${num} = ${square}`)

  num = square
  square = await calcSquare(square)
  console.log(`${num} x ${num} = ${square}`)

  num = square
  square = await calcSquare(square)
  console.log(`${num} x ${num} = ${square}`)

  num = square
  square = await calcSquare('square')
  console.log(`${num} x ${num} = ${square}`)
}

showSquares4Times(2).catch(console.error)
