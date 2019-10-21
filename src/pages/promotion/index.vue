<template>
  <div class="promotion-main">
    <div class="promotion-content" v-for="(item,index) in couponList" :key="index">
      <coupon @deleteCoupon="deleteCoupon" :couponInfo="item"></coupon>
    </div>
    <div class="promotion-btn">
      <van-button round @click="createCoupon">创建优惠券</van-button>
    </div>
    <van-dialog
      use-slot
      :show="showConfirm"
      show-cancel-button
      show-confirm-button
      @close="onClose"
      @confirm="onConfirm"
    >
      <div class="dialog-content">确认删除该优惠券吗？</div>
    </van-dialog>
  </div>
</template>
<script>
import coupon from '../../components/coupon'
import Dialog from 'vant-weapp/dist/dialog/dialog'
import { getCouponList, endCoupon } from '../../api/index'
import { getStorageSync, showLoading, hideLoading } from '../../api/wechat'
import { formatTime, showToast } from '../../utils'
export default {
  components: {
    coupon,
    Dialog
  },
  data() {
    return {
      couponList: [],
      providerId: '',
      selectId: '',
      showConfirm: false,
      pageNum: 1,
      pages: 1
    }
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
  // 上拉刷新操作初始化数据
  onPullDownRefresh: function() {
    this.pageNum = 1
    showLoading('数据加载中')
    this.init(this.pageNum)
  },
  mounted() {
    this.providerId = getStorageSync('providerId')
    this.pageNum = 1
    this.couponList = []
    showLoading('数据加载中')
    this.init(this.pageNum)
  },
  methods: {
    // 优惠券查询
    init(pageNum) {
      getCouponList({
        provider: this.providerId,
        status: '',
        endTime: '',
        startTime: '',
        type: 2,
        couponName: '',
        pageNum: pageNum,
        pageSize: 10
      }).then(res => {
        console.log(res)
        hideLoading()
        if (res.data.code === '000000') {
          let recMsg = res.data.data.list
          if (recMsg && recMsg.length) {
            recMsg.forEach(el => {
              el.startTime = formatTime(el.startTime * 1000)
              el.endCoupon = formatTime(el.endTime * 1000)
            })
            this.pages = res.data.data.pages
            this.couponList.push(...recMsg)
          }
        }
      })
    },
    createCoupon () {
      this.$router.push('/pages/createCoupon/main')
    },
    deleteCoupon(id) {
      this.showConfirm = true
      this.selectId = id
    },
    // 确认删除优惠券
    onConfirm() {
      endCoupon({
        status: 0,
        couponId: this.selectId
      }).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          this.showConfirm = false
          showToast(res.data.message)
        } else {
          showToast(res.data.message)
        }
      })
    },
    onClose() {
      this.showConfirm = false
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
      margin-bottom: 10px;
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
    .dialog-content{
      padding: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
</style>
