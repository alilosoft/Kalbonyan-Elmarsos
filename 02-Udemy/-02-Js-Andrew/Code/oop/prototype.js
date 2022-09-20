const Person = function (name, age, country, hobbies = []) {
  this.name = name
  this.age = age
  this.country = country
  this.hobbies = hobbies
  console.log(this)
}

Person.prototype.showBio = function () {
  let bio = `I'm ${this.name}, from ${this.country}.`

  const hobbies = this.hobbies.join(', ')
  if (hobbies.length > 0) {
    bio += ` I like ${hobbies}.`
  }
  console.log(bio)
}

const alilo = new Person('alilo', 39, 'Algeria', ['Walking', 'Tech geek'])
alilo.showBio()

const ahmed = new Person('ahmed', 38, 'Egypt')
ahmed.showBio()
