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
// getCountryCallbacks('algeria', console.log)

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

// getCountryPromise('egypt').then(console.log).catch(console.error)

// using promise chaining
const getCountryOld = (countryCode) =>
  fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(
          `Unable to get country with code "${countryCode}"\nStatus: ${response.status} | ${response.statusText}`
        )
      }
    })
    .then((json) => json[0])

// using async/await
const getCountry = async (countryCode) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  )

  if (response.ok) {
    const json = await response.json()
    return json[0]
  } else {
    throw new Error(
      `Unable to get country with code "${countryCode}"\nStatus: ${response.status} | ${response.statusText}`
    )
  }
}

// show country flag on html
const showCountryFlag = (name) =>
  getCountry(name)
    .then((country) => {
      // console.log(country)
      const flagEl = document.createElement('img')
      flagEl.width = 300
      flagEl.style.margin = '8px'
      flagEl.style.border = '1px solid'
      flagEl.src = country.flags.svg
      document.body.appendChild(flagEl)
    })
    .catch(console.error)

const countries = ['dz', 'egy', 'ksa', 'irq']
countries.forEach(showCountryFlag)

const getIPInfo = (token = 'a4b7b3cefd793a') =>
  fetch(`https://ipinfo.io/json?token=${token}`).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Status ${response.status} | ${response.statusText}`)
    }
  })

// using async/await
const showIP = async () => {
  const info = await getIPInfo()
  console.log(`async/await: ${info.ip}`)
  return info
}
showIP()

const getCountryCode = async (token = 'a4b7b3cefd793a') => {
  const response = await fetch(`https://ipinfo.io/json?token=${token}`)
  if (response.ok) {
    const json = await response.json()
    return json.country
  } else {
    throw new Error(`Status ${response.status} | ${response.statusText}`)
  }
}

// get ip info then show country flag
getCountryCode().then(showCountryFlag).catch(console.error)
