const notes = [
  { title: 'JS REPL', body: 'An excellent vscode extension' },
  { title: 'xyz', body: 'xyz' },
  {
    title: 'Early Bird',
    body: 'Waking up early will make your day more blessed',
  },
  { title: 'My Office', body: 'الحمد لله على مكتبي الجديد' },
  { title: 'abc', body: 'abcd' },
]

const findNote = function (notes, title) {
  const index = notes.findIndex(function (note, index) {
    return note.title === title
  })
  return notes[index]
}

findNote(notes, 'Build new habits') //=

notes.find(function (note) {
  return note.title.toLowerCase() === 'Build new habits'.toLowerCase() //=
}) //=

const criteria = ''

notes.filter(function (note) {
  return (
    note.title.toLowerCase().includes(criteria) ||
    note.body.toLowerCase().includes(criteria)
  )
}) //=

notes.sort(function (n1, n2) {
  if (n1.title.toLowerCase() < n2.title.toLowerCase()) {
    return -1
  } else if (n1.title.toLowerCase() > n2.title.toLowerCase()) {
    return +1
  } else {
    return 0
  }
})

const sortNotes = function (notes) {}
console.log(notes)
