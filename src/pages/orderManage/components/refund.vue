<template>
  <div class="refund-main">
    <select-bar></select-bar>
  </div>
</template>

<script>
import SelectBar from '../../../components/selectBar.vue'
export default {
  components: {
    SelectBar
  }
}
</script>

<style lang="scss" scoped>
.refund-main{
  box-sizing: border-box;
  padding: 2px 10px 0px 10px;
}
</style>
