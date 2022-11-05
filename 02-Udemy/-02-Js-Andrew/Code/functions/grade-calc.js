const calcGrade = function (score, max = 20) {
  if ([typeof score, typeof max].some((t) => t !== 'number')) {
    throw Error('Args must be numbers')
  }

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

try {
  calcGrade(20)
  calcGrade(15)
  calcGrade(true)
  calcGrade('20')
} catch (error) {
  console.log('Error 😝\n' + error.stack)
}
