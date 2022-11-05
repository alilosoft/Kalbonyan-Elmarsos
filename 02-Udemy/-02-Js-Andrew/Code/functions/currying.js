const add = (a, b) => a + b

// currying add
const adder = (a) => (b) => a + b

const addTo10 = adder(10)
console.log(addTo10(5))
console.log(addTo10(-5))

const addTo100 = adder(100)
console.log(addTo100(5))
console.log(addTo100(-5))

// challenge: tip calculator

const tipCalc = (percent) => (amount) => (amount * percent) / 100

const tip5percent = tipCalc(5)
console.log(tip5percent(250))

const tip10percent = tipCalc(10)
console.log(tip10percent(300))
