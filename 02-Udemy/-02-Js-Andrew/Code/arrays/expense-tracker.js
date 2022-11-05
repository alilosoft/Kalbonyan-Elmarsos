const myAccount = {
  name: 'alilo',
  expenses: [],
  incomes: [],
  addIncome: function (desc, amount) {
    this.incomes.push({
      desc: desc,
      amount: amount,
    })
  },
  addExpense: function (desc, amount) {
    this.expenses.push({
      desc: desc,
      amount: amount,
    })
  },
  showSummary: function () {
    let totalIncome = 0
    this.incomes.forEach(function (income) {
      totalIncome += income.amount
    })

    let totalExpenses = 0
    this.expenses.forEach(function (exp) {
      totalExpenses += exp.amount
    })
    return `${this.name}'s account balance is ${
      totalIncome - totalExpenses
    }, $${totalIncome} income, $${totalExpenses} expenses`
  },
}
myAccount.addIncome('Freelance', 1500)
myAccount.addIncome('Salary', 500)

myAccount.addExpense('Milk', 150)
myAccount.addExpense('Coffee', 10.5)

console.log(myAccount)
console.log(myAccount.showSummary())

myAccount.incomes //=
