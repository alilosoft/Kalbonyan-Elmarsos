const url = 'https://restcountries.com/v2/all'

const request = new XMLHttpRequest()
request.open('GET', url)

request.onload = (e) => {
  if (e.target.status === 200) {
    const countries = JSON.parse(e.target.responseText)
    const myCountry = countries.find((country) => country.name === 'Algeria')
    console.log(myCountry)
    // console.log(countries)
  } else {
    console.log(
      `Error: ${e.target.status} | ${e.target.statusText} | ${e.target.responseText}`
    )
  }
}
request.send()
