<template>
  <div class="promotion-main">
    <div class="promotion-content">
      <coupon @deleteCoupon="deleteCoupon"></coupon>
    </div>
    <div class="promotion-btn">
      <van-button round @click="createCoupon">创建优惠券</van-button>
    </div>
  </div>
</template>
<script>
import coupon from '../../components/coupon'
import { getCouponList, endCoupon } from '../../api/index'
import { getStorageSync } from '../../api/wechat'
export default {
  components: {
    coupon
  },
  methods: {
    createCoupon () {
      this.$router.push('/pages/createCoupon/main')
    },
    // 删除优惠券
    deleteCoupon(couponId) {
      console.log('== deleteCoupon ==')
      endCoupon({status: 0, couponId: couponId}).then(res => {
        console.log(res)
      })
    }
  },
  onShow() {
    getCouponList({
      provider: getStorageSync('providerId'),
      status: '',
      endTime: '',
      startTime: '',
      type: '',
      couponName: ''
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
  .promotion-main{
    margin:10px 10px 0px 10px;
    height: 100%;
    box-sizing: border-box;
    .promotion-content{

    }
    .promotion-btn{
      // position: absolute;
      bottom: 80px;
      margin-top: 50px;
      text-align: center;
       /deep/ .van-button--default{
        background-color: #D00000;
        color: #fff;
        width: 130px;
      }
    }
  }
</style>
