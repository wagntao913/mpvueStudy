import crypto from 'crypto'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}
// 错误处理
export function handleError(response) {
  if (response && response.data && response.data.error_code === 0) {
    return true
  } else {
    const msg = response && response.data && response.data.msg
    if (msg) {
      showToast(msg)
    } else {
      // setError('数据加载失败，请重试')
    }
    return false
  }
}

// 轻提示
export function showToast(title) {
  mpvue.showToast({
    title,
    icon: 'none',
    duration: 2000
  })
}

// md5密码加密
export function passwordChange(password) {
  const md5 = crypto.createHash('md5')
  md5.update(password)
  let md5password = md5.digest('hex')
  console.log(md5password)
  return md5password
}
