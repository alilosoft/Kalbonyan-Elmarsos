class Employee extends Person {
  constructor(name, age, country, job, salary, hobbies = []) {
    super(name, age, country, hobbies)
    this.job = job
    this.salary = salary
  }

  showBio(display = console.log) {
    display(`I'm ${this.name}, a ${this.job} from ${this.country}.`)
  }

  raiseSalary(raise) {
    this.salary += raise
  }
}

const emp = new Employee('Ali', 38, 'Algeria', 'Web Dev', 5000)
emp.showBio()
console.log(emp)

emp.raiseSalary(500)
console.log(emp)

class Student extends Person {
  constructor(name, age, country, grade, hobbies = []) {
    super(name, age, country, hobbies)
    this.grade = grade
  }

  showBio(display = console.log) {
    display(
      `The student ${this.name} is ${
        this.grade >= 70 ? 'passing' : 'failing'
      } the class.`
    )
  }

  updateGrade(grade) {
    this.grade += grade
  }
}

const chya = new Student('Aicha', 6, 'Algeria', 90)
chya.showBio()
console.log(chya)

const s2 = new Student('Someone', 16, 'Somewhere', 50)
console.log(s2)
s2.showBio()
s2.updateGrade(40)
s2.showBio()
