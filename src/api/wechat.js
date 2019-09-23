import { loginWx } from './index'

// 获取授权信息
export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      console.log('== getSetting ==', res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

// 获取用户信息
export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      console.log('== getUserInfo ==', res)
      const { userInfo } = res
      if (userInfo) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log(res)
    }
  })
}

// 获取用户 openId
export function getUserOpenId(iv, encryptedData, callback) {
  mpvue.login({
    success(res) {
      if (res.code) {
        const {code} = res
        loginWx(iv, encryptedData, code).then(res => {
          console.log(res)
          const { data: { data: { openId } } } = res
          setStorageSync('openId', openId)
          callback && callback(openId)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  })
}
// 轻提示
export function showToast(title) {
  mpvue.showToast({
    title,
    icon: 'none',
    duration: 2000
  })
}

// 展示加载
export function showLoading(title) {
  mpvue.showLoading({
    title,
    mask: true
  })
}
// 隐藏加载中
export function hideLoading() {
  mpvue.hideLoading()
}

// storage存储
export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data)
}

// storage获取
export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}
// 更改导航栏标题
export function setNavigationBarTitle(title) {
  mpvue.setNavigationBarTitle({ title })
}
