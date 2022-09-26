const getCountryCallbacks = (
  countryName,
  onSuccess,
  onError = console.error
) => {
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

getCountryCallbacks('algeria', console.log)

const getCountryPromise = (countryName) =>
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
          `📛Error: ${e.target.status} | ${e.target.statusText} | ${e.target.responseText}`
        )
      }
    }
    request.onerror = reject
    request.send()
  })

getCountryPromise('egypt').then(console.log).catch(console.error)

const getCountry = (countryName) =>
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(
          `Can not get country with name "${countryName}"\nStatus: ${response.status} | ${response.statusText}`
        )
      }
    })
    .then((json) => json[0])

const showCountryFlag = (name) =>
  getCountry(name)
    .then((country) => {
      console.log(country)
      const flagEl = document.createElement('img')
      flagEl.src = country.flags.svg
      document.body.appendChild(flagEl)
    })
    .catch(console.error)

const countries = ['algeria', 'egypt', 'ksa', 'tunisia', 'morocco', 'libya']
countries.map(showCountryFlag)
