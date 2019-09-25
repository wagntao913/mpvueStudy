<template>
  <div class="received-main">
    <select-bar></select-bar>
    <div class="card-content">
      <item-card
        orderNo="123546456446"
        status="已提货"
        statusColor="#21AB10"
      ></item-card>
    </div>
  </div>
</template>

<script>
import SelectBar from '../../../components/selectBar.vue'
import ItemCard from '../../../components/itemCard'

export default {
  components: {
    SelectBar,
    ItemCard
  }
}
</script>

<style lang="scss" scoped>
.received-main{
  box-sizing: border-box;
  padding: 2px 10px 0px 10px;
}
</style>
