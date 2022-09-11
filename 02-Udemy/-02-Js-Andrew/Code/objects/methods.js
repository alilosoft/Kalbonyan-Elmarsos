let restaurant = {
  name: 'Konafet Mama Imane',
  capacity: 45,
  guests: 0,
  checkAvailable: function (partySize) {
    return this.capacity - this.guests >= partySize
  },
  seatParty: function (partySize) {
    this.guests += partySize
  },
  removeParty: function (partySize) {
    this.guests -= partySize
  },
}

restaurant.seatParty(41)
console.log(restaurant.checkAvailable(5))
restaurant.removeParty(10)
console.log(restaurant.checkAvailable(5))
