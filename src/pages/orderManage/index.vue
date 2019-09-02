<template>
  <div class="order-manange-main">
    <van-tabs animated sticky swipeable color="#D00000">
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
      <van-tab title="已售后">
        <after-sale></after-sale>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import AllOrders from './components/allOrders'
import AfterSale from './components/afterSale'
import Refund from './components/refund'
import PendingReceipt from './components/pendingReceipt'
import Received from './components/received'

export default {
  components: {
    AllOrders,
    AfterSale,
    Refund,
    PendingReceipt,
    Received
  }
}
</script>

<style lang="scss" scoped>
.order-manange-main{}
</style>
