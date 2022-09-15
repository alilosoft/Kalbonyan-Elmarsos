// load notes from local storage
const loadNotes = function () {
  const storedNotes = localStorage.getItem('notes')
  if (storedNotes !== null) {
    return JSON.parse(storedNotes)
  } else {
    return []
  }
}

// create new note
const createNote = function () {
  const n = Math.ceil(Math.random() * 100)
  const timeStamp = dayjs().valueOf()
  const newNote = {
    id: self.crypto.randomUUID(),
    title: `Note${n}`,
    body: 'abcd',
    createdAt: timeStamp,
    updatedAt: timeStamp,
  }
  myNotes.push(newNote)
  return newNote
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

const sortNotes = function (notes, orderBy = 'edited') {
  notes.sort(function (n1, n2) {
    if (orderBy === 'created') {
      return n2.createdAt - n1.createdAt
    } else if (orderBy === 'edited') {
      return n2.updatedAt - n1.updatedAt
    } else {
      // alphabetically
      return n1.title.localeCompare(n2.title)
    }
  })
  return notes
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

// generate note element
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

  // note title/edit link
  const editLink = document.createElement('a')
  editLink.href = `edit.html#${note.id}`
  if (note.title.trim().length > 0) {
    editLink.textContent = note.title
  } else {
    editLink.textContent = 'Untitled'
  }
  noteEl.appendChild(editLink)

  // last edit
  const lastUpdateEl = document.createElement('p')
  lastUpdateEl.textContent = lastUpdateTxt(note.updatedAt)
  noteEl.appendChild(lastUpdateEl)
  return noteEl
}

const lastUpdateTxt = function (timestamp) {
  const time = dayjs(timestamp).fromNow()
  return `Updated ${time}`
}
