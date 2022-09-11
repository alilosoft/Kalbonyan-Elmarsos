let employee = {
  name: 'alilo',
  country: 'Algeria',
  job: 'Soft Dev',
  company: 'alilosoft',
}

let employDesc = function (employee) {
  return {
    intro: `${employee.name} from ${employee.country}`,
    pages: `Works as ${employee.job} at ${employee.company}`,
  }
}

console.log(employDesc(employee))

// Challenge

let tempSummary = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  return {
    fahrenheit: `${fahrenheit}°F`,
    celsius: `${celsius}°C`,
    kelvin: `${celsius + 273.15}K`,
  }
}

console.log(tempSummary(32))
console.log(tempSummary(68))
