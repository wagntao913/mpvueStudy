<template>
  <div class="withdraw-main">
    <div class="withdraw-wrapper">
      <div class="withdraw-title">
        提现到微信钱包
      </div>
      <div class="withdraw-sub-title">
        提现金额（元）
      </div>
      <div class="withdraw-content">
        <div class="unit">¥</div>
        <input
          v-model="withdrawMoney "
          class="withdraw-input"
          placeholder-style="font-size:13px;"
          type="digit"
          placeholder="本次最少提现1元"
        />
      </div>
      <div class="divider"></div>
      <div class="tips">
        当前账户可提现余额 {{ totalWithdrawMoney }} 元
      </div>
      <div class="withdraw-btn">
        <van-button round @click="handleWithdrawMoney">提现</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addWithdrawMoney, getWithdrawMoney } from '../../api/index'
import { getStorageSync } from '../../api/wechat'
export default {
  data() {
    return {
      withdrawMoney: '',
      totalWithdrawMoney: '',
      providerId: ''
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
    getWithdrawMoney(this.providerId).then(res => {
      if (res.data.code === '000000') {
        this.totalWithdrawMoney = res.data.data
      }
    })
  },
  methods: {
    handleWithdrawMoney() {
      addWithdrawMoney({
        providerId: this.providerId
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.withdraw-main{
  overflow: hidden;
  .withdraw-wrapper{
    box-sizing: border-box;
    margin: 8px 10px 0px 10px;
    padding: 15px 0 0 11px;
    height:258px;
    width:355px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    .withdraw-title{
      font-size:14px;
      margin-bottom: 23.5px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(34,34,34,1);
    }
    .withdraw-sub-title{
      font-size:12px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(34,34,34,1);
    }
    .withdraw-content{
      display: flex;
      justify-content: start;
      align-items: baseline;
      padding: 26px 10px 0px 16px;
      .unit{
        font-size: 30px;
      }
      .withdraw-input{
        font-size: 21px;
        margin-left: 5px;
      }
    }
    .divider{
      padding-left: 16px;
      height: 1px;
      background: #f3f3f3;
    }
    .tips{
      margin-top:17.5px;
      margin-left: 16px;
      font-size:12px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(136,136,136,1);
    }
    .withdraw-btn{
      text-align: center;
      margin-top: 27px;
      /deep/ .van-button--default{
        width: 130px;
        background: #FA7921;
        // font-size: 15px;
        color: #ffffff;
      }
      // width: 130px;
    }
  }
}
</style>
