<template>
  <div class="coupon-main">
    <div class="coupon-left">
      <div class="coupon-amount">
        ￥{{couponInfo.couponPrice}}
      </div>
      <div class="coupon-condition">
        满{{couponInfo.usePrice}}元可用
      </div>
    </div>
    <div class="coupon-right">
      <div class="coupon-description">
        <div class="coupon-range">{{couponInfo.couponName}}</div>
        <div class="coupon-data">{{couponInfo.startTime}} - {{couponInfo.endTime}}</div>
        <div class="coupon-total">发行
          {{couponInfo.quantity}}张，已领取{{couponInfo.drawQuantity}}张
        </div>
      </div>
      <div class="coupon-del">
        <van-button round plain hairline size="mini" @click="onclick(couponInfo.id)">删除</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    couponInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onclick(id) {
      this.$emit('deleteCoupon', id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .coupon-main{
    display: flex;
    text-align: center;
    justify-content:space-between;
    height: 70px;
    width: 355px;
    box-sizing: border-box;
    .coupon-left{
      text-align: center;
      display: flex;
      height: 100%;
      width: 100px;
      flex-direction: column;
      justify-items: center;
      color:#E90216;

      .coupon-amount{
        height: 50%;
        font-size: 25px;
        background:radial-gradient(circle at right top, transparent 8px, #FFE9E9 8px);
      }
      .coupon-condition{
        height:50%;
        font-size:12px;
        background:radial-gradient(circle at right bottom, transparent 8px, #FFE9E9 8px);
      }
    }
    .coupon-right{
      position: relative;
      background: #Ffffff;
      display: flex;
      justify-content: space-around;
      align-items:center;
      width: 255px;
      color:#555555;
      font-size: 10px;
      // background:radial-gradient(circle at left top, transparent 10px, #fff 10px);
      /deep/ .van-button--default{
        border-color: #FA7921;
        color: #FA7921;
        // width: 130px;
      }
      &::before{
        content: '';
        position: absolute;
        background: #f3f3f3;
        height: 10px;
        width:10px;
        top: 0;
        left:0px;
        right:0;
        // z-index: 1000;
        background:radial-gradient(circle at left top, #f3f3f3 8px,#fff 8px);
      }
      &::after{
        content: '';
        background: #f3f3f3;
        height: 10px;
        width:10px;
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        background:radial-gradient(circle at left bottom, #f3f3f3 8px,#fff 8px);
        // z-index: 1000;
      }
    }
  }
</style>
