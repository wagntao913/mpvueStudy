<template>
  <div class="order-manange-main">
    <van-tabs animated sticky swipeable color="#D00000" :active="active">
      <van-tab title="所有订单">
        <all-orders></all-orders>
      </van-tab>
      <van-tab title="待提货">
        <pending-receipt></pending-receipt>
      </van-tab>
      <van-tab title="已提货">
        <received></received>
      </van-tab>
      <van-tab title="售后退款">
        <refund></refund>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import AllOrders from './components/allOrders'
import Refund from './components/refund'
import PendingReceipt from './components/pendingReceipt'
import Received from './components/received'
import { getOrderStatus } from '../../api/index'

export default {
  components: {
    AllOrders,
    Refund,
    PendingReceipt,
    Received
  },
  data() {
    return {
      active: 2
    }
  },
  onShow() {
    console.log(this.$route.query)
    this.active = this.$route.query.active ? this.$route.query.active : '0'
    console.log(this.active)
    this.init()
  },
  methods: {
    init() {
      getOrderStatus().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-manange-main{}
</style>
