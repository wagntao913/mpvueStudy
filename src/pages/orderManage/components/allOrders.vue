<template>
  <div class="pending-receipt-main">
    <select-bar></select-bar>
  </div>
</template>

<script>
import SelectBar from '../../../components/selectBar.vue'
import { getOrderStatus } from '../../../api/index'
import { getStorageSync, showLoading, hideLoading } from '../../../api/wechat'

export default {
  components: {
    SelectBar
  },
  data() {
    return {
      providerId: '',
      status: '',
      pageNum: 1,
      pageSize: 10
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
  },
  methods: {
    orderList() {
      showLoading('订单数据加载中，请稍侯....')
      getOrderStatus({
        providerId: this.providerId,
        status: this.status,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res)
        hideLoading()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pending-receipt-main{
  box-sizing: border-box;
  padding: 2px 10px 0px 10px;
}
</style>
