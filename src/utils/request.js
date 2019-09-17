// 创建fly实例
function createFly() {
  if (mpvuePlatform === 'wx') { // 判断是否是微信平台
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}
// 错误处理
function handleError(params) {
  console.log(params)
}
// get方法
export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(error => {
        handleError(error)
        reject(error)
      })
    })
  }
}
// post方法
export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(error => {
        handleError(error)
        reject(error)
      })
    })
  }
}
