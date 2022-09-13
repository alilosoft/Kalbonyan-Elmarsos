// load notes from local storage
const loadNotes = function () {
  const storedNotes = localStorage.getItem('notes')
  if (storedNotes !== null) {
    return JSON.parse(storedNotes)
  } else {
    return []
  }
}

// store notes to local storage
const storeNotes = function (notes = myNotes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// filter notes with title
const filterNotes = function (notes, filters = myFilters) {
  return notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
}

// render notes in html
const showNotes = function (notes = filterNotes(myNotes)) {
  const notesList = document.querySelector('#notes-list')
  notesList.innerHTML = ''
  notes.forEach(function (note) {
    notesList.appendChild(createNoteEl(note))
  })
}

// delete a note by id
const deleteNote = function (id, notes = myNotes) {
  const index = notes.findIndex(function (note) {
    return note.id === id
  })
  notes.splice(index, 1)
}

// generate a note <li>
const createNoteEl = function (note) {
  const noteEl = document.createElement('li')
  // delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.appendChild(createIonIcon('trash'))
  deleteBtn.onclick = function (e) {
    deleteNote(note.id)
    storeNotes()
    showNotes()
  }
  noteEl.appendChild(deleteBtn)

  // note text
  const noteText = document.createElement('span')
  if (note.title.trim().length > 0) {
    noteText.textContent = note.title
  } else {
    noteText.textContent = 'Untitled'
  }
  noteEl.appendChild(noteText)
  return noteEl
}
