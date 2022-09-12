const todos = [
  { text: 'Tasty Coffee', completed: true },
  { text: 'JS Course (Andrew)', completed: true },
  { text: 'Feed Birds', completed: false },
  { text: 'Nice Nap', completed: true },
  { text: 'Dinner', completed: false },
]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText //=
  })
  todos.splice(index, 1)
}

// deleteTodo(todos, 'dinner')
// console.log(todos)

const findRemainingTodos = function (todos) {
  return todos.filter(function (todo) {
    return todo.completed === false //=
  })
}

findRemainingTodos(todos) //=

// sorting
const sortTodos = function (todos) {
  todos.sort(function (t1, t2) {
    if (t1.completed && t2.completed) {
      return 0
    } else if (t1.completed) {
      return +1
    } else {
      return -1
    }
  }) //=
}

sortTodos(todos)
console.log(todos)
