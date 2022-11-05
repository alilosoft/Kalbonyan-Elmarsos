'use strict'

// load notes from local storage
const loadNotes = () => {
  try {
    const storedNotes = localStorage.getItem('notes')
    return storedNotes ? JSON.parse(storedNotes) : []
  } catch (error) {
    console.log('Invalid data loaded from storage\n' + error.message)
    console.log('Resetting data...')
    return []
  }
}

// create new note
const createNote = () => {
  const n = Math.ceil(Math.random() * 100)
  const timeStamp = dayjs().valueOf()
  const newNote = {
    id: self.crypto.randomUUID(),
    title: `Note-${n}`,
    body: 'abcd',
    createdAt: timeStamp,
    updatedAt: timeStamp,
  }
  myNotes.push(newNote)
  return newNote
}

// store notes to local storage
const storeNotes = (notes = myNotes) =>
  localStorage.setItem('notes', JSON.stringify(notes))

// filter notes with title
const filterNotes = (notes, filters = myFilters) =>
  notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )

const sortNotes = (notes, orderBy = 'edited') =>
  notes.sort((n1, n2) => {
    if (orderBy === 'created') {
      return n2.createdAt - n1.createdAt
    } else if (orderBy === 'edited') {
      return n2.updatedAt - n1.updatedAt
    } else {
      return n1.title.localeCompare(n2.title)
    }
  })

// render notes in html
const showNotes = (notes = filterNotes(myNotes)) => {
  const notesList = document.querySelector('#notes-list')
  notesList.innerHTML = ''
  if (notes.length > 0) {
    notes.forEach((note) => notesList.appendChild(createNoteEl(note)))
  } else {
    const emptyMsgEl = document.createElement('p')
    emptyMsgEl.textContent = 'No notes to show :('
    emptyMsgEl.classList.add('empty-message')
    notesList.appendChild(emptyMsgEl)
  }
}

// delete a note by id
const deleteNote = (id, notes = myNotes) => {
  const index = notes.findIndex((note) => note.id === id)
  notes.splice(index, 1)
}

// generate note element
const createNoteEl = (note) => {
  // edit link
  const noteEl = document.createElement('a')
  noteEl.href = `edit.html#${note.id}`
  noteEl.classList.add('list-item')

  const titleEl = document.createElement('p')
  titleEl.textContent = note.title.trim().length ? note.title : 'Untitled'
  titleEl.classList.add('list-item__title')
  noteEl.appendChild(titleEl)
  // last edit
  const lastUpdateEl = document.createElement('p')
  lastUpdateEl.textContent = lastUpdateTxt(note.updatedAt)
  lastUpdateEl.classList.add('list-item__subtitle')
  noteEl.appendChild(lastUpdateEl)

  const listItemEl = document.createElement('li')
  listItemEl.appendChild(noteEl)
  return listItemEl
}

const createDeleteButton = (note) => {
  // delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.appendChild(createIonIcon('trash'))
  deleteBtn.onclick = function (e) {
    deleteNote(note.id)
    storeNotes()
    showNotes()
  }
}

const lastUpdateTxt = (timestamp) => `Updated ${dayjs(timestamp).fromNow()}`
