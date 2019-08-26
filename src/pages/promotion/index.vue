<template>
  <div class="promotion-main">
    <div class="promotion-content">
      <coupon></coupon>
    </div>
    <div class="promotion-btn">
      <van-button round @click="createCoupon">创建优惠券</van-button>
    </div>
  </div>
</template>
<script>
import coupon from '../../components/coupon'
export default {
  components: {
    coupon
  },
  methods: {
    createCoupon () {
      this.$router.push('/pages/createCoupon/main')
    }
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
      position: absolute;
      bottom: 80px;
      left:31%;
      text-align: center;
       /deep/ .van-button--default{
        background-color: #FA7921;
        color: #fff;
        width: 130px;
      }
    }
  }
</style>
