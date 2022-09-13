const loadTodos = function () {
  const stored = localStorage.getItem('todos')
  if (stored === null) {
    return []
  } else {
    return JSON.parse(stored)
  }
}
const myTodos = loadTodos()

const storeTodos = function () {
  localStorage.setItem('todos', JSON.stringify(myTodos))
}

// filter todos
const myFilters = {
  searchText: '',
  hideCompleted: false,
}
const filterTodos = function (todos, filters = myFilters) {
  return todos.filter(function (todo) {
    return (
      todo.text.toLowerCase().includes(filters.searchText) &&
      (!filters.hideCompleted || !todo.completed)
    )
  })
}

// show all todos
const showTodos = function (todos = filterTodos(myTodos)) {
  const todosList = document.querySelector('ol')
  todosList.innerHTML = ''
  todos.forEach(function (todo) {
    const todoListItem = document.createElement('li')
    let completed = todo.completed ? '✔' : '✖'
    todoListItem.textContent = `${todo.text} ${completed}`
    todosList.appendChild(todoListItem)
  })
  showRemaining(todos)
}

// remaining todos reminder
const showRemaining = function (todos = filterTodos(myTodos)) {
  const count = todos.filter(function (todo) {
    return !todo.completed
  }).length

  document.querySelector(
    '#remaining-txt'
  ).textContent = `You have ${count} tasks left to do`
}

// search todo
document.querySelector('#todos-search').addEventListener('input', function (e) {
  myFilters.searchText = e.target.value
  const filtered = filterTodos(myTodos, myFilters)
  showTodos(filtered)
})

// hide completed
document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    myFilters.hideCompleted = e.target.checked
    const filtered = filterTodos(myTodos, myFilters)
    showTodos(filtered)
  })

// new todo
document
  .querySelector('#new-todo-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()
    const input = e.target.elements.todoText
    myTodos.push({
      text: input.value,
      completed: false,
    })
    input.value = ''
    storeTodos()
    showTodos()
  })

showTodos()
