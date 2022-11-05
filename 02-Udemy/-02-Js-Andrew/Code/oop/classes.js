class Person {
  constructor(fullName, age, country, hobbies = []) {
    this.firstName = fullName.split(' ')[0]
    this.lastName = fullName.split(' ')[1]
    this.age = age
    this.country = country
    this.hobbies = hobbies
  }

  showBio() {
    let bio = `I'm ${this.firstName}, from ${this.country} & I'm ${this.age} years old.`

    const hobbies = this.hobbies.join(', ')
    if (hobbies.length > 0) {
      bio += ` I like ${hobbies}.`
    }
    console.log(bio)
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(newName) {
    this.firstName = newName.split(' ')[0]
    this.lastName = newName.split(' ')[1]
  }
}

const me = new Person('Alilo Fellahi', 39, 'Algeria', ['Walking', 'Tech geek'])
me.showBio()
console.log(me)
class Employee extends Person {
  constructor(name, age, country, job, salary, hobbies = []) {
    super(name, age, country, hobbies)
    this.job = job
    this.salary = salary
  }

  showBio(display = console.log) {
    display(`I'm ${this.fullName}, a ${this.job} from ${this.country}.`)
  }

  raiseSalary(raise) {
    this.salary += raise
  }
}

const emp = new Employee('Ali FELLAHI', 39, 'Algeria', 'Web Dev', 5000)
emp.showBio()
console.log(emp)
emp.raiseSalary(500)

class Student extends Person {
  constructor(name, age, country, grade, hobbies = []) {
    super(name, age, country, hobbies)
    this.grade = grade
  }

  showBio(display = console.log) {
    display(
      `The student ${this.firstName} is ${
        this.grade >= 70 ? 'passing' : 'failing'
      } the class.`
    )
  }

  updateGrade(change) {
    this.grade += change
  }
}

const chya = new Student('Aicha Fellahi', 6, 'Algeria', 90)
chya.showBio()
console.log(chya)

const s2 = new Student('Someone', 16, 'Somewhere', 50)
console.log(s2)
s2.showBio()
s2.updateGrade(40)
s2.showBio()
