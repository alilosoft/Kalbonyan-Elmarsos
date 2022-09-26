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
