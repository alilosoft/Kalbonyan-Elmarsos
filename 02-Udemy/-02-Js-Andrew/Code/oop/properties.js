const data = {
  get location() {
    return this._location
  },

  set location(newLocation) {
    this._location = newLocation.trim()
  },
}

console.log(data)
data.location = ' Algeria '
console.log(data.location)
