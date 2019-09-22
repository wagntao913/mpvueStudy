// 微信登录
export function wxLogin (auth, onSuccess, onFail) {
  mpvue.login({
    success (res) {
      console.log('== wxLogin ==', res)
      if (res.code) {
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
        // onFail(res)
      }
    },
    fail(res) {
      console.log(res)
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
