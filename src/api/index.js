// import { post, get } from '../utils/request'
import { post } from '../utils/request'
const BASE_URL = 'http://col.gsgouma.com'

/* 小程序登录授权管理 */
export function loginWx(iv, encryptedData, code) {
  return post(`${BASE_URL}/api/business/login/loginWx`, {iv, encryptedData, code})
}

/* 小程序用户登录 */
export function userLogin(phone, password, openId) {
  return post(`${BASE_URL}/api/business/user/userLogin`, {phone, password, openId})
}

/* 忘记密码
newPassword (string, optional): 新密码 ,
openId (string, optional): openId ,
password (string, optional): 密码 ,
phone (string, optional): 电话号码 ,
providerId (integer, optional): 登录用户id ,
verificationCode (string, optional): 验证码 ,
withdrawPassword (string, optional): 提现密码
 */
export function forgetPassword(verificationCode, phone, newPassword, openId) {
  return post(`${BASE_URL}/api/business/user/forgetPassword`, {verificationCode, phone, newPassword, openId})
}

/* 发送验证码
note (string, optional): 发送前缀 ,
phone (string, optional): 电话号码
*/
export function sendCode(phone, note) {
  return post(`${BASE_URL}/api/business/user/sendCode`, { phone, note })
}

/* 修改密码
newPassword (string, optional): 新密码 ,
openId (string, optional): openId ,
password (string, optional): 密码 ,
phone (string, optional): 电话号码 ,
providerId (integer, optional): 登录用户id ,
verificationCode (string, optional): 验证码 ,
withdrawPassword (string, optional): 提现密码
*/
export function userResetPwd(params) {
  return post(`${BASE_URL}/api/business/user/userResetPwd`, params)
}

/* 设置提现密码
newPassword (string, optional): 新密码 ,
openId (string, optional): openId ,
password (string, optional): 密码 ,
phone (string, optional): 电话号码 ,
providerId (integer, optional): 登录用户id ,
verificationCode (string, optional): 验证码 ,
withdrawPassword (string, optional): 提现密码
*/
export function withdrawPassword(params) {
  return post(`${BASE_URL}/api/business/user/withdrawPassword`, params)
}

/* 修改商家
addTime (integer, optional): 新增时间 ,
cashDeposit (number, optional): 商家保证金 ,
icon (string, optional): 商家头像 ,
intro (string, optional): 商家介绍 ,
name (string, optional): 商家名称 ,
openId (string, optional): 商家微信信息id ,
pageNum (integer, optional),
pageSize (integer, optional),
password (string, optional): 商家的登录密码 ,
phone (string, optional): 商家电话（登录账号） ,
providerId (integer, optional): 商家id ,
updateTime (integer, optional): 修改时间 ,
withdrawPassword (string, optional): 提现密码
*/
export function updateUser(params) {
  return post(`${BASE_URL}/api/business/user/updateUser`, params)
}

/* 获取提现审核记录
addTime (integer, optional): 新增时间 ,
auditOpinion (string, optional): 审核意见 ,
id (integer, optional): 主键id ,
pageNum (integer, optional),
pageSize (integer, optional),
providerId (integer, optional): 供应商id ,
reviewProgress (integer, optional): 审核进度 0审核中 1审核通过 2审核未通过 3转账 ,
updateTime (integer, optional): 修改时间 ,
withdrawMoney (number, optional): 提现金额
*/
export function getListFinance(providerId, pageSize, pageNum, reviewProgress) {
  return post(`${BASE_URL}/api/business/finance/getListFinance`, { providerId, pageSize, pageNum, reviewProgress })
}
/* 商家不同状态订单查询
cardMoney (number, optional): 优惠卷金额 ,
consignee (string, optional): consignee ,
consigneeMobile (string, optional): 收货人电话 ,
createTime (string, optional): 创建时间 ,
endTime (string, optional),
orderId (integer, optional),
orderItem (Array[订单参数], optional): 订单明细 ,
pageNum (integer, optional),
pageSize (integer, optional),
price (number, optional): 金额 ,
productId (integer, optional): 产品id ,
productName (string, optional): 商品名称 ,
providerId (integer, optional): 供应商 ,
quantity (integer, optional): 购买数量 ,
refundQuantity (integer, optional): 退货数量 ,
sendOrderId (integer, optional): 发货单id ,
sendOrderSn (string, optional): 发货单号 ,
sku (string, optional): sku ,
skuInfo (string, optional): sku信息 ,
startTime (string, optional),
status (integer, optional): 状态1待发货 2发货 3 签收(已提货) 4完成 6待提货 ,
totalMoney (number, optional): 总金额
*/
export function getOrderStatus(params) {
  return post(`${BASE_URL}/api/business/order/getOrderStatus`, params)
}

/* POST /api/business/finance/getWithdrawMoney
商家可提现金额(还不可用) */
export function getWithdrawMoney(params) {
  return post(`${BASE_URL}/api/business/finance/getWithdrawMoney`, params)
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
