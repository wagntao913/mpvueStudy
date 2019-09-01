// 获取授权信息
export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      console.log(res)
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
      console.log(res)
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
// 轻提示
export function showToast(title) {
  mpvue.showToast({
    title,
    duration: 2000
  })
}
// 更改导航栏标题
export function setNavigationBarTitle(title) {
  mpvue.setNavigationBarTitle({ title })
}
