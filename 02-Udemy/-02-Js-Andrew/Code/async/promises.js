const makeGuess = (guess, max = 5) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.ceil(Math.random() * max)
      if (random === guess) {
        resolve(`😀🎉 Nice you got it (${random})`)
      } else {
        reject(`😥👎 Try again... (${random})`)
      }
    }, 500)
  })

const myGuess = makeGuess(3).then(
  (result) => console.log(result),
  (err) => console.log(err)
)

// calc square using promise
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

calcSquare(3)
  .then((res) => {
    console.log(`first promise: ${res}`)
    return calcSquare(res)
  })
  .then((res) => {
    console.log(`second promise: ${res}`)
    return calcSquare(res)
  })
  .then((res) => {
    console.log(`third promise: ${res}`)
  })
  .finally(() => console.log(`Calc finished`))
  .catch((err) => console.error(`📛 Error: ${err}`))
