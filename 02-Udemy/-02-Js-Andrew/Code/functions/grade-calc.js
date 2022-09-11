const calcGrade = function (score, max = 20) {
  let grade
  if (score > 20 || score < 0) {
    console.log('Please provide a score between 0 & 20')
  } else {
    const percent = (score / max) * 100

    if (percent >= 90) {
      grade = 'A'
    } else if (percent >= 80) {
      grade = 'B'
    } else if (percent >= 70) {
      grade = 'C'
    } else if (grade >= 60) {
      grade = 'D'
    } else {
      grade = 'F'
    }
    console.log(`You got a ${grade} (${percent}%)!`)
  }
}

calcGrade(20)
calcGrade(17)
calcGrade(15)
calcGrade(10)
calcGrade(5)
calcGrade(25)
calcGrade(-5)
