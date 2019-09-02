<template>
  <div class="pending-receipt-main">
    <select-bar></select-bar>
    <div class="card-content">
      <item-card
        orderNo="123546456446"
        status="待提货"
      ></item-card>
    </div>
  </div>
</template>

<script>
import SelectBar from './selectBar'
import ItemCard from '../../../components/itemCard'

export default {
  components: {
    SelectBar,
    ItemCard
  }
}
</script>

<style lang="scss" scoped>
.pending-receipt-main{
  box-sizing: border-box;
  padding: 2px 10px 0px 10px;
  .card-content{
    height: 100%;
  }
}
</style>
