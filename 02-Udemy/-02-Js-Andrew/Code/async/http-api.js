const fetchCountryInfo = (countryName, onSuccess, onError = console.log) => {
  const url = 'https://restcountries.com/v2/all'
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = (e) => {
    if (e.target.status === 200) {
      const countries = JSON.parse(e.target.responseText)
      const myCountry = countries.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      )
      onSuccess(myCountry)
    } else {
      onError(
        `Error: ${e.target.status} | ${e.target.statusText} | ${e.target.responseText}`
      )
    }
  }
  request.send()
}

fetchCountryInfo('algeria', console.log)

const fetchCountryInfoPromise = (countryName) =>
  new Promise((resolve, reject) => {
    const url = 'https://restcountries.com/v2/all'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = (e) => {
      if (e.target.status === 200) {
        const countries = JSON.parse(e.target.responseText)
        const myCountry = countries.find(
          (country) => country.name.toLowerCase() === countryName.toLowerCase()
        )
        resolve(myCountry)
      } else {
        reject(
          `Error📛: ${e.target.status} | ${e.target.statusText} | ${e.target.responseText}`
        )
      }
    }
    request.onerror = reject
    request.send()
  })

fetchCountryInfoPromise('egypt').then(console.log).catch(console.error)
