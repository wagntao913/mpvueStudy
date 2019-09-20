// import { post, get } from '../utils/request'
import { post } from '../utils/request'
const BASE_URL = 'http://col.gsgouma.com'

/* 小程序登录授权管理 */
export function loginWx(params) {
  return post(`${BASE_URL}/api/business/login/loginWx`, params)
}

/* 忘记密码 */
export function userLogin(params) {
  return post(`${BASE_URL}/api/business/user/userLogin`, params)
}

/* 修改密码 */
export function userResetPwd(params) {
  return post(`${BASE_URL}/api/business/user/userResetPwd`, params)
}

/* 设置提现密码 */
export function withdrawPassword(params) {
  return post(`${BASE_URL}/api/business/user/withdrawPassword`, params)
}

/* 修改商家 */
export function updateUser(params) {
  return post(`${BASE_URL}/api/business/user/updateUser`, params)
}

/* 发送验证码 */
export function sendCode(params) {
  return post(`${BASE_URL}/api/business/user/sendCode`, params)
}

/* 商家不同状态订单查询 */
export function getOrderStatus(params) {
  return post(`${BASE_URL}/api/business/order/getOrderStatus`, params)
}

/* 查询近30天销售金额 */
export function get30Sale(params) {
  return post(`${BASE_URL}/api/business/act/get30Sale`, params)
}

/* 查询近七天销售金额 */
export function getSevenSale(params) {
  return post(`${BASE_URL}/api/business/act/getSevenSale`, params)
}

/* 查询今天销售金额 */
export function getTodaySale(params) {
  return post(`${BASE_URL}/api/business/act/getTodaySale`, params)
}

/* 查询访客数量 */
export function getVisitor(params) {
  return post(`${BASE_URL}/api/business/act/getVisitor`, params)
}

/* 商家显示有几条未读消息 */
export function getIsReadList(params) {
  return post(`${BASE_URL}/api/business/message/getIsReadList`, params)
}

/* 查看消息列表 */
export function getMessqgeList(params) {
  return post(`${BASE_URL}/api/business/message/getMessqgeList`, params)
}

/* 商家读取某条消息(查看详情，并修改此用户此消息的状态) */
export function getReadMessage(params) {
  return post(`${BASE_URL}/api/business/message/getReadMessage`, params)
}

/* 修改消息（删除消息） */
export function udpateMessage(params) {
  return post(`${BASE_URL}/api/business/message/udpateMessage`, params)
}

/* 查询商家上架商品列表 */
export function getListGoods(params) {
  return post(`${BASE_URL}/api/business/act/getListGoods`, params)
}

/* 商家新增活动 */
export function addActivity(params) {
  return post(`${BASE_URL}/api/business/act/addActivity`, params)
}

/* 商家我的预售列表（启用） */
export function getListPresell(params) {
  return post(`${BASE_URL}/api/business/act/getListPresell`, params)
}

/* 商家我的秒杀列表（启用） */
export function getListSeckill(params) {
  return post(`${BASE_URL}/api/business/act/getListSeckill`, params)
}

/* 商家我的预售，秒杀列表已结束 */
export function getListPresellEnd(params) {
  return post(`${BASE_URL}/api/business/act/getListPresellEnd`, params)
}

/* 商家新增优惠卷调用（https://m.gsgouma.com/back/order/coupon/addCoupon.json） */
export function addCoupon(params) {
  return post(`${BASE_URL}/api/business/coupon/addCoupon`, params)
}

/* 商家优惠卷查询调用（https://m.gsgouma.com/back/order/coupon/couponPage.json） */
export function getCouponList(params) {
  return post(`${BASE_URL}/api/business/coupon/getCouponList`, params)
}
