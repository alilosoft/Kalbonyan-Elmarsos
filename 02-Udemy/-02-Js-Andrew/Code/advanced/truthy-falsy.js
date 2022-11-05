// falsy values: false, null, undefined, NaN, 0, empty string

let falsy = false
if (!falsy) console.log(`${falsy} is falsy`)

falsy = null
if (!falsy) console.log(`${falsy} is falsy`)

falsy = undefined
if (!falsy) console.log(`${falsy} is falsy`)

falsy = NaN
if (!falsy) console.log(`${falsy} is falsy`)

falsy = 0
if (!falsy) console.log(`${falsy} is falsy`)

falsy = ''
if (!falsy) console.log(`${falsy} is falsy`)
