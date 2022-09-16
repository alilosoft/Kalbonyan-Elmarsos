// get the id from url
const id = location.hash.substring(1)

// find the note in storage
const myNotes = loadNotes()
const note = myNotes.find((note) => note.id === id)

if (note === undefined) {
  location.assign('index.html')
} else {
  const titleEl = document.querySelector('#note-title')
  const bodyEl = document.querySelector('#note-body')
  const lastUpdateEl = document.querySelector('#last-update')

  titleEl.value = note.title
  bodyEl.value = note.body
  lastUpdateEl.textContent = lastUpdateTxt(note.updatedAt)

  titleEl.addEventListener('input', (e) => (note.title = e.target.value))

  bodyEl.addEventListener('input', (e) => (note.body = e.target.value))

  document.querySelector('#save-btn').addEventListener('click', (e) => {
    note.updatedAt = dayjs().valueOf()
    storeNotes()
    location.assign('index.html')
  })
}

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    location.reload()
  }
})
