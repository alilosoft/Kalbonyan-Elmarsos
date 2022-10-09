console.log('challenge.js')

const allCaps = (word) =>
  word
    .split('')
    .map((l) => l.toUpperCase())
    .join('')

export default allCaps
