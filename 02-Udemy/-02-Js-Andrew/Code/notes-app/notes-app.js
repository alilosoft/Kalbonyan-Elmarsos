const myNotes = loadNotes()
const myFilters = {
  searchText: '',
  orderBy: 'edited',
}
showNotes(sortNotes(filterNotes(myNotes)))

// add new note
document.querySelector('#btn-add-note').addEventListener('click', function (e) {
  console.log('adding new note...')
  const note = createNote()
  location.assign(`edit.html#${note.id}`)
  storeNotes()
})

// filter notes
document.querySelector('#search-txt').addEventListener('input', function (e) {
  myFilters.searchText = e.target.value
  showNotes(sortNotes(filterNotes(myNotes, myFilters), myFilters.orderBy))
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    location.reload()
  }
})

// sort notes
document.querySelector('#sort-notes').addEventListener('change', function (e) {
  myFilters.orderBy = e.target.value
  showNotes(sortNotes(filterNotes(myNotes, myFilters), myFilters.orderBy))
})
