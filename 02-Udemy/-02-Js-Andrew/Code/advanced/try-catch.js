const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25
  } else {
    throw Error('The amount arg should be a number')
  }
}

console.log(getTip(100))

try {
  console.log(getTip(true)) // call with wrong args
} catch (e) {
  console.log('Some error happened')
}
