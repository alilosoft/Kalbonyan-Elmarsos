// load notes from storage
const loadNotes = function () {
  const storedNotes = localStorage.getItem('notes')
  if (storedNotes !== null) {
    return JSON.parse(storedNotes)
  } else {
    return []
  }
}
const myNotes = loadNotes()

const storeNotes = function (notes = myNotes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// add note btn
document.querySelector('#btn-add-note').addEventListener('click', function (e) {
  console.log('adding new note...')
  const n = Math.ceil(Math.random() * 100)
  myNotes.push({ title: `Note${n}`, body: 'abcd' })
  storeNotes()
  showNotes()
})

// filter notes
myFilters = {
  searchText: '',
}
const filterNotes = function (notes, filters = myFilters) {
  return notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
}
document.querySelector('#search-txt').addEventListener('input', function (e) {
  myFilters.searchText = e.target.value
  showNotes(filterNotes(myNotes, myFilters))
})

// render notes in html
const showNotes = function (notes = filterNotes(myNotes)) {
  const notesList = document.querySelector('#notes-list')
  notesList.innerHTML = ''
  notes.forEach(function (note) {
    const noteItem = document.createElement('li')

    if (note.title.trim().length > 0) {
      noteItem.textContent = note.title
    } else {
      noteItem.textContent = 'Untitled'
    }
    notesList.appendChild(noteItem)
  })
}

showNotes()
