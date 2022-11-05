'use strict'

const process = () => {
  data = 'leaked global' //= error in strict mode
  console.log(data)
}

process()
console.log(data)
