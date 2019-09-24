<template>
  <div class="after-sale-main">
    <select-bar></select-bar>
  </div>
</template>

<script>
import SelectBar from '../../components/selectBar'
import { getOrderStatus } from '../../api/index'

export default {
  components: {
    SelectBar
  },
  data() {
    return {
      afterSaleList: []
    }
  },
  onShow() {
    this.init()
  },
  methods: {
    init() {
      getOrderStatus().then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.after-sale-main{
  box-sizing: border-box;
  padding: 2px 10px 0px 10px;
}
</style>
