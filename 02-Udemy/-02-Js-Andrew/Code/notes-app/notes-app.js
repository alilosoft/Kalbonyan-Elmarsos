const myNotes = loadNotes()
const myFilters = {
  searchText: '',
}
showNotes()

// add new note
document.querySelector('#btn-add-note').addEventListener('click', function (e) {
  console.log('adding new note...')
  const n = Math.ceil(Math.random() * 100)
  myNotes.push({
    id: self.crypto.randomUUID(),
    title: `Note${n}`,
    body: 'abcd',
  })
  storeNotes()
  showNotes()
})

// filter notes
document.querySelector('#search-txt').addEventListener('input', function (e) {
  myFilters.searchText = e.target.value
  showNotes(filterNotes(myNotes, myFilters))
})
