<template>
  <div class="widthdrawals-record-main">
    <div class="record-card">
      <div class="card-content">
        <div class="row">
          <div class="">
            申请时间：<span style="color: #888888">2019-9-22 09:22:32</span>
          </div>
          <div class="">
            申请状态： <span style="color: #FA7921">审核中</span>
          </div>
        </div>
        <div class="row">
          <div class="">
            提现至：张三 微信钱包
          </div>
          <div class="">
            申请提现： <span style="color: #FA7921">￥150</span>
          </div>
        </div>
        <div class="card-divider"></div>
      </div>
      <div class="card-content">
        <div class="row">
          <div class="">
            申请时间：<span style="color: #888888">2019-9-22 09:22:32</span>
          </div>
          <div class="">
            申请状态： <span style="color: #FA7921">审核中</span>
          </div>
        </div>
        <div class="row">
          <div class="">
            提现至：张三 微信钱包
          </div>
          <div class="">
            申请提现： <span style="color: #FA7921">￥150</span>
          </div>
        </div>
        <div class="card-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListFinance } from '../../api/index'
import { getStorageSync } from '../../api/wechat'
export default {
  data() {
    return {
      recordList: []
    }
  },
  onShow() {
    this.init()
  },
  methods: {
    init() {
      let providerId = getStorageSync('providerId')
      getListFinance(providerId).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.widthdrawals-record-main{
  .record-card{
    box-sizing: border-box;
    width:354px;
    margin:8px 8px 0px 8px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    padding: 10px 10px;
    .card-content{
      .row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding: 5px;
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
