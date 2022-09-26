const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.ceil(Math.random() * 10)
    if (random >= 5) {
      resolve(`😀, we got: ${random} (>= 5)`)
    } else {
      reject(`😥, we got: ${random} (< 5)`)
    }
  }, 1000)
})

myPromise.then(
  (result) => console.log(result),
  (err) => console.log(err)
)
