const calSquare = (num, onResult, onError) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      onResult(num * num)
    } else {
      onError('Please provide a number :| ')
    }
  }, 500)
}

// callback hell in action
calSquare(
  2,
  (result) => {
    console.log(`first callback: ${result}`)
    calSquare(
      result,
      (result) => {
        console.log(`second callback: ${result}`)
        calSquare(
          result,
          (result) => {
            console.log(`third callback: ${result}`)
          },
          (err) => console.error(`📛 Error: ${err}`)
        )
      },
      (err) => console.error(`📛 Error: ${err}`)
    )
  },
  (err) => console.error(`📛 Error: ${err}`)
)
