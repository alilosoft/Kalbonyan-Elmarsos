const loadTodos = () => {
  const stored = localStorage.getItem('todos')
  return stored ? JSON.parse(stored) : []
}

const storeTodos = (todos = myTodos) =>
  localStorage.setItem('todos', JSON.stringify(todos))

const filterTodos = (todos, filters = myFilters) =>
  todos.filter((todo) => {
    const searchMatch = todo.text.toLowerCase().includes(filters.searchText)
    const hideMatch = !filters.hideCompleted || !todo.completed
    return searchMatch && hideMatch
  })

// render todos to html
const showTodos = (todos = filterTodos(myTodos)) => {
  const todosList = document.querySelector('ol')
  todosList.innerHTML = ''
  todos.forEach((todo) => todosList.appendChild(createTodoEl(todo)))
  showSummary(todos)
}

// delete a todo by id
const deleteTodo = (id, todos = myTodos) => {
  const index = todos.findIndex((todo) => todo.id === id)
  todos.splice(index, 1)
}

const createTodoEl = (todo) => {
  const todoEl = document.createElement('li')
  // checkbox setup
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.checked = todo.completed
  checkBox.addEventListener('change', (e) => {
    todo.completed = e.target.checked
    storeTodos()
    showTodos()
  })
  todoEl.appendChild(checkBox)
  // text setup
  const todoText = document.createElement('span')
  if (todo.text.length) {
    todoText.textContent = `${todo.text}`
  } else {
    todoText.textContent = `${todo.id}`
  }
  todoEl.appendChild(todoText)
  // delete btn setup
  const deleteBtn = document.createElement('button')
  deleteBtn.appendChild(createIonIcon('trash'))
  deleteBtn.onclick = (e) => {
    deleteTodo(todo.id) // should be responsible only for deletion
    storeTodos() // store & show are called here after delete and not inside delete for separation of concerns
    showTodos()
  }
  todoEl.appendChild(deleteBtn)

  return todoEl
}

// show summary
const showSummary = (todos = filterTodos(myTodos)) => {
  const count = todos.filter((todo) => !todo.completed).length
  document.querySelector(
    '#summary-txt'
  ).textContent = `You have ${count} todos left`
}
