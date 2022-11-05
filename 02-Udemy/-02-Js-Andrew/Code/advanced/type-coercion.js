// type coercion: to number, to string & to boolean

console.log('5' + 5) //= '55' (coerced to string)
console.log('5' * 5) //= 25 (coerced to number)

console.log(true + 10) //== 11
console.log(false + 10) //== 10
console.log(typeof (true + 10)) //= number

console.log(5 === 5) //= true
console.log('5' === 5) //= false
console.log('5' == 5) //= true
