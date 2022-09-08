// global scope
let one = 1 // accessible anywhere

if (one === 1) {
  // local scope #1
  let two = 2 // accessible to scope_1 & scope_2
  if (one === two) {
    // local scope #2
    let three = 3 // accessible only in scope_2
    // never
  }
}

let name = 'alilo'

if (true) {
  let name = 'ahmed'
  console.log(name) // will print 'ahmed', because of variable shadowing
}
