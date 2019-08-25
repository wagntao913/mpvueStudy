<template>
  <div class="coupon-main">
    <div class="coupon-left">
      <div class="coupon-amount">
        ￥10
      </div>
      <div class="coupon-condition">
        满150元可用
      </div>
    </div>
    <div class="coupon-right">
      <div class="coupon-description">
        <div class="coupon-range">(活动商品除外)</div>
        <div class="coupon-data">2019.06.24 - 2019.0708</div>
        <div class="coupon-total">发行100张，已领取521张</div>
      </div>
      <div class="coupon-del">
        <van-button round plain hairline size="mini">删除</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

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
      // margin-left: 10px;
      background: #FFE9E9;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      color:#E90216;
      .coupon-amount{
        font-size: 25px;
      }
      .coupon-condition{
        font-size:12px;
      }
    }
    .coupon-right{
      background: #Ffffff;
      display: flex;
      justify-content: space-around;
      align-items:center;
      width: 255px;
      color:#555555;
      font-size: 10px;
      /deep/ .van-button--default{
        border-color: #FA7921;
        color: #FA7921;
        // width: 130px;
      }
    }
  }
</style>
