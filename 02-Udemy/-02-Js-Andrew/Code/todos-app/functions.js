const loadTodos = function () {
  const stored = localStorage.getItem('todos')
  if (stored === null) {
    return []
  } else {
    return JSON.parse(stored)
  }
}

const storeTodos = function (todos = myTodos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const filterTodos = function (todos, filters = myFilters) {
  return todos.filter(function (todo) {
    const searchMatch = todo.text.toLowerCase().includes(filters.searchText)
    const hideMatch = !filters.hideCompleted || !todo.completed
    return searchMatch && hideMatch
  })
}

// render todos to html
const showTodos = function (todos = filterTodos(myTodos)) {
  const todosList = document.querySelector('ol')
  todosList.innerHTML = ''
  todos.forEach(function (todo) {
    todosList.appendChild(createTodoEl(todo))
  })
  showSummary(todos)
}

// delete a todo by id
const deleteTodo = function (id, todos = myTodos) {
  const index = todos.findIndex(function (todo) {
    return todo.id === id
  })
  todos.splice(index, 1)
}

const createTodoEl = function (todo) {
  const todoEl = document.createElement('li')
  // checkbox setup
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.checked = todo.completed
  checkBox.addEventListener('change', function (e) {
    todo.completed = e.target.checked
    storeTodos()
    showTodos()
  })
  todoEl.appendChild(checkBox)
  // text setup
  const todoText = document.createElement('span')
  if (todo.text.length === 0) {
    todoText.textContent = `${todo.id}`
  } else {
    todoText.textContent = `${todo.text}`
  }
  todoEl.appendChild(todoText)
  // delete btn setup
  const deleteBtn = document.createElement('button')
  deleteBtn.appendChild(createIonIcon('trash'))
  deleteBtn.onclick = function (e) {
    deleteTodo(todo.id) // should be responsible only for deletion
    storeTodos() // store & show are called here after delete and not inside delete for separation of concerns
    showTodos()
  }
  todoEl.appendChild(deleteBtn)

  return todoEl
}

// show summary
const showSummary = function (todos = filterTodos(myTodos)) {
  const count = todos.filter(function (todo) {
    return !todo.completed
  }).length

  document.querySelector(
    '#summary-txt'
  ).textContent = `You have ${count} todos left`
}
