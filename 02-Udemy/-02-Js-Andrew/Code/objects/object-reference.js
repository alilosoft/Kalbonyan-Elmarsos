let person = {
  name: 'alilo',
  age: 38,
}
console.log(person)

let getOlder = function (person) {
  person.age = person.age + 1
  return person
}

console.log(getOlder(person))
console.log(person)

let myAccount = {
  name: 'Ali',
  income: 4000,
  expenses: 300,
} //=

let addExpense = function (account, amount) {
  account.expenses += amount
  return account
}

let addIncome = function (account, amount) {
  return {
    name: account.name,
    income: account.income + amount,
    expenses: account.expenses,
  }
}

let accountSummary = function (account) {
  let balance = account.income - account.expenses
  return `${account.name}'s account has $${balance}.
    Total income: $${account.income}
    Expenses: $${account.expenses}`
}

console.log(accountSummary(myAccount))
addExpense(myAccount, 50)
console.log(accountSummary(myAccount))
addIncome(myAccount, 1000)
console.log(accountSummary(myAccount))
addExpense(myAccount, 250)
console.log(accountSummary(myAccount))
