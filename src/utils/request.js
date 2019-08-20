function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

function handleError(err) {
  console.log(err)
}

export function get(url, params = {}) {
  const fly = createFly()
  return new Promise((resolve, reject) => {
    fly.get(url, params).then(res => {
      console.log(res)
      resolve(res)
    }).catch(err => {
      handleError(err)
      reject(err)
    })
  })
}
