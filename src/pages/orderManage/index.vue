<template>
  <div class="order-manange-main">
    <van-tabs animated sticky swipeable color="#D00000" :active="active" @change="changetabs">
      <van-tab title="所有订单">
        <all-orders></all-orders>
      </van-tab>
      <van-tab title="待提货">
        <pending-receipt></pending-receipt>
      </van-tab>
      <van-tab title="已提货">
        <received></received>
      </van-tab>
      <!-- <van-tab title="售后退款">
        <refund></refund>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import AllOrders from './components/allOrders'
import Refund from './components/refund'
import PendingReceipt from './components/pendingReceipt'
import Received from './components/received'
import { getOrderStatus } from '../../api/index'
import { getStorageSync, showLoading, hideLoading } from '../../api/wechat'

export default {
  components: {
    AllOrders,
    Refund,
    PendingReceipt,
    Received
  },
  data() {
    return {
      active: 0,
      providerId: '',
      status: null,
      pageNum: 1,
      pageSize: 20
    }
  },
  onShow() {
    console.log(this.$route.query)
    showLoading('加载中...')
    this.active = this.$route.query.active ? this.$route.query.active : '0'
    if (this.active === '1') {
      this.status = 6
    } else if (this.active === '2') {
      this.status = 3
    } else if (this.active === '3') {
      this.status = 4
    }
    this.providerId = getStorageSync('providerId')
    console.log(this.active)
    this.init()
  },
  methods: {
    init() {
      // 状态 1待发货 2发货 3 签收(已提货) 4完成 6待提货 ,
      getOrderStatus(this.providerId, this.status, this.pageNum, this.pageSize).then(res => {
        console.log(res)
        hideLoading()
      }).catch(err => {
        console.log(err)
      })
    },
    changetabs(e) {
      console.log(e.mp.detail.index)
      if (e.mp.detail.index === 1) {
        this.status = 6
      } else if (e.mp.detail.index === 2) {
        this.status = 3
      } else {
        this.status = null
      }
      showLoading('加载中...')
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.order-manange-main{}
</style>
