let myName = 'Ali Fellahi'

console.log(myName.length)
console.log(myName.toLowerCase().includes('ali'))
console.log(myName.trim())
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

console.log('------------------')

let isPasswordValid = function (password) {
  return (
    password.trim().length >= 8 && !password.toLowerCase().includes('password')
  )
}

console.log(isPasswordValid('123'))
console.log(isPasswordValid('Strong-passWord'))
console.log(isPasswordValid('123456789'))
