'use strict'

const loadTodos = () => {
  try {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.log('Invalid data loaded, resetting...')
    return []
  }
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
  if (todos.length > 0) {
    todos.forEach((todo) => todosList.appendChild(createTodoEl(todo)))
  } else {
    const emptyEl = document.createElement('p')
    emptyEl.classList.add('empty-message')
    emptyEl.textContent = 'No todos to show :('
    todosList.appendChild(emptyEl)
  }
  getSummary(todos)
}

// delete a todo by id
const deleteTodo = (id, todos = myTodos) => {
  const index = todos.findIndex((todo) => todo.id === id)
  todos.splice(index, 1)
}

const createTodoEl = (todo) => {
  const todoEl = document.createElement('label')
  todoEl.classList.add('list-item')

  // setup todo checkbox
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  checkBox.checked = todo.completed
  checkBox.addEventListener('change', (e) => {
    todo.completed = e.target.checked
    storeTodos()
    showTodos()
  })

  // setup text span
  const todoText = document.createElement('span')
  if (todo.text.length) {
    todoText.textContent = `${todo.text}`
  } else {
    todoText.textContent = `${todo.id}`
  }

  // setup container for checkbox & text el
  const containerEl = document.createElement('div')
  containerEl.classList.add('list-item__container')
  containerEl.appendChild(checkBox)
  containerEl.appendChild(todoText)
  todoEl.appendChild(containerEl)

  // setup delete btn
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.appendChild(createIonIcon('trash'))
  deleteBtn.onclick = (e) => {
    if (confirm('Are you sure?')) {
      deleteTodo(todo.id) // should be responsible only for deletion
      storeTodos() // store & show are called here after delete and not inside delete for separation of concerns
      showTodos()
    }
  }
  todoEl.appendChild(deleteBtn)

  return todoEl
}

// show summary
const getSummary = (todos = filterTodos(myTodos)) => {
  const count = todos.filter((todo) => !todo.completed).length
  const summaryEl = document.querySelector('#summary-txt')
  summaryEl.classList.add('list-title')
  const plural = count > 1 ? 's' : ''
  summaryEl.textContent = `You have ${count} todo${plural} left`
}
