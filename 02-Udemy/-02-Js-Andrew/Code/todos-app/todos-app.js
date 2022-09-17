'use strict'

// load from storage
const myTodos = loadTodos()

// filter todos
const myFilters = {
  searchText: '',
  hideCompleted: false,
}

// new todo
document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.elements.todoText
  myTodos.push({
    id: uuidv4(),
    text: input.value,
    completed: false,
  })
  input.value = ''
  storeTodos(myTodos)
  showTodos(filterTodos(myTodos))
})

// search todo
document.querySelector('#todos-search').addEventListener('input', (e) => {
  myFilters.searchText = e.target.value
  const filtered = filterTodos(myTodos, myFilters)
  showTodos(filtered)
})

// hide completed
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  myFilters.hideCompleted = e.target.checked
  const filtered = filterTodos(myTodos, myFilters)
  showTodos(filtered)
})

showTodos()
