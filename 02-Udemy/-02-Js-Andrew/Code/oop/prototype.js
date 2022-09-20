const Person = function (fullName, age, country, hobbies = []) {
  this.fullName = fullName
  this.age = age
  this.country = country
  this.hobbies = hobbies
  console.log(this)
}

Person.prototype.showBio = function () {
  let bio = `I'm ${this.firstName}, from ${this.country}.`

  const hobbies = this.hobbies.join(', ')
  if (hobbies.length > 0) {
    bio += ` I like ${hobbies}.`
  }
  console.log(bio)
}

// setter & getter with prototype
Object.defineProperty(Person.prototype, 'firstName', {
  get() {
    console.log('first name getter')
    return this.fullName.split(' ')[0]
  },
  set(firstName) {
    console.log('first name setter ' + firstName)
    this.fullName = `${firstName} ${this.lastName}`
  },
})

Object.defineProperty(Person.prototype, 'lastName', {
  get() {
    console.log('last name getter')
    return this.fullName.split(' ')[1]
  },
  set(lastName) {
    console.log('last name setter ' + lastName)
    this.fullName = `${this.firstName} ${lastName}`
  },
})

const me = new Person('Ali Fellahi', 39, 'Algeria', ['Walking', 'Tech geek'])
me.showBio()
console.log(me)
