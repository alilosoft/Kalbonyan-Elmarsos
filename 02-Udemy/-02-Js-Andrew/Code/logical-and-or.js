let temp = 65

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice to go out :)')
}

temp = 130
if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside')
}

let isGuest1Vegan = true
let isGuest2Vegan = false

if (isGuest1Vegan && isGuest2Vegan) {
  console.log('Only offer vegan dishes')
} else if (isGuest1Vegan || isGuest2Vegan) {
  console.log('Offer at least one vegan dish')
} else {
  console.log('Offer any thing')
}
