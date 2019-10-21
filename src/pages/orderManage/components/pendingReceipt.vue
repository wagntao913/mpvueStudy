<template>
  <div class="pending-receipt-main">
    <select-bar></select-bar>
    <div class="card-content" v-for="(item,index) in orderList" :key="index">
      <item-card :orderList="item"></item-card>
    </div>
  </div>
</template>

<script>
import SelectBar from '../../../components/selectBar.vue'
import ItemCard from '../../../components/itemCard'
import { getOrderStatus } from '../../../api/index'
import { getStorageSync, showLoading, hideLoading } from '../../../api/wechat'

export default {
  components: {
    SelectBar,
    ItemCard
  },
  data() {
    return {
      providerId: '',
      orderList: [],
      status: 6,
      pageNum: 1,
      pageSize: 10
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
  },
  methods: {
    getPending() {
      showLoading('订单数据加载中，请稍侯....')
      getOrderStatus({
        providerId: this.providerId,
        status: this.status,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          console.log(res.data.data)
          this.orderList = res.data.data.list
        }
        hideLoading()
      })
    }
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
