<template>
  <div class="index-main">
    <div class="index-wrapper" v-if="isAuth">
      <div class="user-wrapper">
        <!-- <div class="page-title">
          商家中心
        </div> -->
        <div class="user-content">
          <div class="user-avatar">
            <image-view
              src="/static/images/avatar.jpg"
              round
              width="50px;"
            ></image-view>
          </div>
          <div class="user-info">
            <div class="user-name">
              旺果阳光
            </div>
            <div class="user-text">
              <div class="user-desc">
                专门从事芒果采加销的水果商行
              </div>
              <div class="user-promise">
                保证金余额：5000元
              </div>
            </div>
          </div>
          <van-icon name="setting-o" class="setting" @click="businessSetting"></van-icon>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card-title">
          <div>交易数据</div>
          <van-button round size="mini" @click="takeOut">提现</van-button>
        </div>
        <div class="card-divider"></div>
        <div class="card-content">
          <div class="business-data">
            <div class="business-data-left">
              <p>今日销售额：<span style="color:red">¥3699</span></p>
              <p>今日加购人数：12</p>
              <p>本周销售金额：524.3</p>
            </div>
            <div class="business-data-right">
              <p>可提现金额：<span style="color:red">¥1550.10</span></p>
              <p>今日访客：13</p>
              <p>本月销售额：8752</p>
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
            <div class="order-item" @click="jumpPages('withdraw')">
              <van-icon class="order-item-icon" name="cash-back-record" color="#D00000"></van-icon>
              <p class="order-item-title">提现记录</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <auth v-if="!isAuth" @getUserInfo="init"></auth>
    </div>
  </div>
</template>

<script>
import { getSetting, getUserInfo } from '../../api/wechat'
// import { get } from '../../utils/request'

import imageView from '../../components/base/imageView'
import auth from '../../components/auth'

export default {
  components: {
    imageView,
    auth
  },
  data() {
    return {
      isAuth: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
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
    },
    // 授权
    getSetting() {
      getSetting('userInfo',
        (res) => {
          console.log('==success==', res)
          this.isAuth = true
          this.getUserInfo()
        },
        (res) => {
          console.log('==fail==', res)
          this.isAuth = false
        }
      )
    },
    // 获取用户信息
    getUserInfo() {
      getUserInfo(
        (userInfo) => {
          console.log(userInfo)
        },
        (res) => {
          console.log(res)
        }
      )
    },
    init() {
      this.getSetting()
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
          align-items: center;
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
