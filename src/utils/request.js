import { showToast } from '.'

// 创建fly实例
export function createFly() {
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
        // console.log(response)
        resolve(response)
      }).catch(err => {
        handleError(err)
        if (err.response.status === '504' || err.response.status === '404') {
          showToast('服务器被吃了⊙﹏⊙∥')
        } else if (err.response.status === 403) {
          showToast('权限不足,请联系管理员!')
        } else {
          showToast('系统异常,请联系管理员!')
        }
        reject(err)
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
        // console.log(response)
        resolve(response)
      }).catch(error => {
        handleError(error)
        reject(error)
      })
    })
  }
}
