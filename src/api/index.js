import { post, get } from '../utils/request'
// import { post } from '../utils/request'
const BASE_URL = 'http://col.gsgouma.com'
/* 获取商家详情 */
export function getUser(params) {
  return post(`${BASE_URL}/back/business/user/getUser`, params)
}
/* 小程序登录授权管理 */
export function loginWx(params) {
  return get(`${BASE_URL}/api/login/loginWx`, params)
}
