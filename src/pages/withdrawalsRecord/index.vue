<template>
  <div class="widthdrawals-record-main">
    <div class="record-card">
      <div class="card-content" v-for="(item, index) in recordList" :key="index">
        <div class="row">
          <div class="">
            申请时间：<span style="color: #888888">{{ item.addTime }}</span>
          </div>
          <div class="">
            申请状态： <span :style="{color:  (item.reviewProgress === 1 || reviewProgress === 3) ? '#21AB10' :'#FA7921'}">{{ item.reviewProgress === 0 ? '审核中': item.reviewProgress === 1 ? '审核通过': item.reviewProgress === 2 ? '审核未通过' : item.reviewProgress === 3 ? '转账' : '' }}</span>
          </div>
        </div>
        <div class="row">
          <div class="">
            提现至：微信钱包
          </div>
          <div class="">
            申请提现： <span style="color: #FA7921">￥{{ item.withdrawMoney }}</span>
          </div>
        </div>
        <div class="card-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListFinance } from '../../api/index'
import { getStorageSync, showToast } from '../../api/wechat'
import { formatTime } from '../../utils/index'
export default {
  data() {
    return {
      recordList: [],
      providerId: '',
      pageNum: 1,
      pages: 1,
      pageSize: 10
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
    this.init()
  },
  // 触底加载
  onReachBottom() {
    this.pageNum++
    if (this.pageNum < this.pages || this.pageNum === this.pages) {
      this.init(this.pageNum)
    } else {
      showToast('没有更多数据了')
    }
  },
  methods: {
    init(pageNum) {
      let params = {
        providerId: this.providerId,
        pageNum: pageNum,
        pageSize: this.pageSize
      }
      getListFinance(params).then(res => {
        console.log(res.data)
        if (res.data.code === '000000') {
          let recList = res.data.data.list
          recList.forEach(el => {
            console.log(el)
            el.addTime = formatTime(el.addTime)
          })
          this.recordList = recList
          this.pages = res.data.data.pages
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.widthdrawals-record-main{
  .record-card{
    box-sizing: border-box;
    // width:354px;
    margin:8px 8px 0px 8px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    padding: 10px 5px;
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
