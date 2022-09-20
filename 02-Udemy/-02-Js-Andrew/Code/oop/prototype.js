const Person = function (name, age, job, country, hobbies = []) {
  this.name = name
  this.age = age
  this.job = job
  this.country = country
  this.hobbies = hobbies
  console.log(this)
}

Person.prototype.showBio = function () {
  let bio = `I'm ${this.name}, a ${this.job} from ${this.country}.`

  this.hobbies.forEach((hobby) => {
    bio += ` ${this.name} likes ${hobby}.`
  })
  console.log(bio)
}

const alilo = new Person('alilo', 39, 'Jr. Web dev', 'Algeria', [
  'Walking',
  'Birds',
])
alilo.showBio()

const ahmed = new Person('ahmed', 38, 'Sr. Software engineer', 'Egypt')
ahmed.showBio()

// will not affect other instances
alilo.showBio = function () {
  console.log('overridden showBio() ')
}

alilo.showBio()
ahmed.showBio()
