class Employee {
  constructor(name, salary, job) {
    this.name = name
    this.job = job
    this.salary = salary
  }

  showBio(display = console.log) {
    display(`I'm ${this.name}, a ${this.job}`)
  }

  raiseSalary(raise) {
    this.salary += raise
  }
}

const emp = new Employee('Ali', 5000, 'Web Dev')
emp.showBio()
console.log(emp)

emp.raiseSalary(500)
console.log(emp)
