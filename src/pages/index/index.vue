<template>
  <div class="index-main">
    <div class="index-wrapper">
      <div class="user-wrapper">
        <!-- <div class="page-title">
          商家中心
        </div> -->
        <div class="user-content">
          <div class="user-avatar">
            <image-view
              :src="providerInfo.icon"
              round
              width="50px;"
            ></image-view>
          </div>
          <div class="user-info">
            <div class="user-name">
              {{ providerInfo.name }}
            </div>
            <div class="user-text">
              <div class="user-desc">
                {{ providerInfo.intro }}
              </div>
              <div class="user-promise">
                保证金余额：{{ providerInfo.cashDeposit }}元
              </div>
            </div>
          </div>
          <van-icon name="setting-o" class="setting" @click="businessSetting"></van-icon>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="notice-box" style="padding: 10px 10px 10px 10px;" @click="jumpPages('notice')">
          <div style="color: #D00000;font-weight: bold;">消息:</div>
          <!-- <van-button round size="mini" @click="takeOut">提现</van-button> -->
          <div style="width: 80%;">
            <swiper vertical autoplay circular duration="300">
              <swiper-item>
                <span style="font-size: 12px;">
                  店铺有<span style="color: #D00000;font-weight: bold;"> {{ messageCount.type0Count }} </span>项库存预警通知，请查收！
                </span>
              </swiper-item>
              <swiper-item>
                <span style="font-size: 12px;">
                  店铺有<span style="color: #D00000;font-weight: bold;"> {{ messageCount.type1Count }} </span>项活动通知，请查收！
                </span>
              </swiper-item>
              <swiper-item>
                <span style="font-size: 12px;">
                  店铺有<span style="color: #D00000;font-weight: bold;"> {{ messageCount.type2Count }} </span>项违规提醒通知，请查收！
                </span>
              </swiper-item>
              <swiper-item>
                <span style="font-size: 12px;">
                  店铺有<span style="color: #D00000;font-weight: bold;"> {{ messageCount.type3Count }} </span>项规则变更通知，请查收！
                </span>
              </swiper-item>
            </swiper>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card-title">
          <div>交易数据</div>
          <!-- <van-button round size="mini" @click="takeOut">提现</van-button> -->
        </div>
        <div class="card-divider"></div>
        <div class="card-content">
          <div class="business-data">
            <div class="business-data-left">
              <p>今日销售额：<span style="color:red">¥ {{ todaySale }}</span></p>
              <!-- <p>今日加购人数：12</p> -->
              <p>三十天销售额：{{ monthSale }}</p>
              <p>七天销售金额：{{ sevenSale }}</p>
            </div>
            <div class="business-data-right">
              <p>可提现金额：<span style="color:red">¥1550.10</span></p>
              <p>访客数：{{ visitors }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card-title">
          <div>订单管理</div>
        </div>
        <div class="card-divider"></div>
        <div class="card-content">
          <div class="order-manage">
            <div class="order-item" @click="jumpPages('orderManage',1)">
              <i class="iconfont icon-wode-tidandaitihuo order-item-icon"></i>
              <p class="order-item-title">待提货订单</p>
            </div>
            <div class="order-item" @click="jumpPages('orderManage',2)">
              <i class="iconfont icon-yidongduanshangchuan- order-item-icon"></i>
              <p class="order-item-title">已提货订单</p>
            </div>
            <div class="order-item" @click="jumpPages('orderManage',3)">
              <i class="iconfont .icon-tuikuan order-item-icon"></i>
              <p class="order-item-title">待售后订单</p>
            </div>
            <div class="order-item" @click="jumpPages('afterSale')">
              <i class="iconfont icon-shangpin order-item-icon" style="font-size: 20px;"></i>
              <p class="order-item-title">已售出订单</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card-title">
          <div>店铺管理</div>
        </div>
        <div class="card-divider"></div>
        <div class="card-content">
          <div class="shop-manage">
            <div class="order-item" @click="jumpPages('promotion')">
              <van-icon class="order-item-icon" name="discount" color="#D00000"></van-icon>
              <p class="order-item-title">促销管理</p>
            </div>
            <div class="order-item" @click="jumpPages('activity')">
              <van-icon class="order-item-icon" name="gift-o" color="#D00000"></van-icon>
              <p class="order-item-title">活动管理</p>
            </div>
            <div class="order-item" @click="jumpPages('withdrawalsRecord')">
              <van-icon class="order-item-icon" name="cash-back-record" color="#D00000"></van-icon>
              <p class="order-item-title">提现记录</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getSetting, getUserInfo, setStorageSync, getStorageSync, showToast, showLoading, hideLoading, getUserOpenId } from '../../api/wechat'
import { getStorageSync, showToast, showLoading, hideLoading } from '../../api/wechat'
import { getVisitor, getTodaySale, getSevenSale, get30Sale, getIsReadList } from '../../api/index'
import { createFly } from '../../utils/request'

import imageView from '../../components/base/imageView'

export default {
  components: {
    imageView
  },
  data() {
    return {
      providerInfo: {},
      providerId: '', // 商家ID
      visitors: '', // 访客量
      todaySale: '', // 今日销售额
      sevenSale: '', // 七日销售额
      monthSale: '', // 30天销售额
      messageCount: { // 未读消息
        type0Count: '',
        type1Count: '',
        type2Count: '',
        type3Count: ''
      }
    }
  },
  mounted () {
    showLoading('正在加载...')
    this.providerInfo = getStorageSync('providerInfo') || {}
    this.providerId = getStorageSync('providerId') || ''
    this.init()
  },
  methods: {
    init() {
      const fly = createFly()
      fly.all([
        getVisitor(this.providerId),
        getTodaySale(this.providerId),
        getSevenSale(this.providerId),
        // getWithdrawMoney(this.providerId),
        get30Sale(this.providerId),
        getIsReadList(this.providerId)
      ]).then(fly.spread((visitors, todaySale, sevenSale, monthSale, messageCount) => {
        console.log(visitors.data, todaySale.data, sevenSale.data, monthSale.data, messageCount.data)
        this.visitors = visitors.data.data
        this.todaySale = todaySale.data.data
        this.sevenSale = sevenSale.data.data
        this.monthSale = monthSale.data.data
        this.messageCount = messageCount.data.data
        hideLoading()
      })).catch((err) => {
        console.log(err)
        showToast(err)
      })
    },
    // 跳转提现页面
    takeOut () {
      this.$router.push('/pages/withdraw/main')
    },
    // 跳转商户设置
    businessSetting () {
      this.$router.push('/pages/settings/main')
    },
    // 跳转页面
    jumpPages (type, active) {
      // debugger
      if (!active) {
        this.$router.push('/pages/' + type + '/main')
      } else {
        this.$router.push({
          path: '/pages/' + type + '/main',
          query: { active: active }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-main{
  .index-wrapper {
    background-color: #f3f3f3;
    box-sizing: border-box;
    padding-bottom: 9px;
    height: 100%;
    width: 100%;
    .user-wrapper{
      height: 126px;
      background-color: #D00000;
      box-sizing: border-box;
      .user-content{
        position: relative;
        padding: 50px 12px 10px 12px;
        display: flex;
        // align-items: top;
        .user-avatar{
          height: 50px;
          width: 50px;
          margin-right: 8px;
        }
        .user-info{
          .user-name{
            font-size: 16px;
            color: #fff;
          }
          .user-text{
            margin-top: 8px;
            .user-desc,.user-promise {
              font-size: 12px;
              line-height: 16px;
              color: #fff;
            }
          }
        }
        .setting{
          position: absolute;
          right: 12px;
          font-size: 18px;
          color: #fff;
        }
      }
    }
    .card-wrapper {
      box-sizing: border-box;
      width:354px;
      margin:8px 10px 0px 11px;
      background:rgba(255,255,255,1);
      border-radius:5px;
      .notice-box{
        height: 20px;
        overflow: hidden;
        padding: 14px 10px 0px 10px;
        display: flex;
        justify-content: space-between;
      }
      .card-title{
        padding: 14px 10px 0px 10px;
        display: flex;
        justify-content: space-between;
        /deep/ .van-button--default{
          background-color: #D00000;
          color: #fff;
        }
      }
      .card-content{
        padding: 5px 27px 5px 10px;
        .business-data{
          display: flex;
          justify-content: space-around;
          // align-items: center;
          font-size:12px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(85,85,85,1);
          line-height:30px;
        }
        .order-manage, .shop-manage{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          .order-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 65px;
            width: 100px;
            .order-item-icon{
              font-size: 24px;
              color:#FA7921;
            }
            .order-item-title{
              // width: 100px;
              font-size:12px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(34,34,34,1);
              // line-height:60px;
            }
          }
        }
      }
      .card-divider{
        background-color: #E3E3E3;
        height: 1px;
        margin: 8px;
      }
    }
  }
}
</style>
