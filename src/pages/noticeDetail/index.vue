<template>
  <div class="notice-detail-main">
    <div class="notice-card">
      <!-- <div class="notice-icon"></div> -->
      <div class="notice-card-title">
        <span>天香情 新疆红枣 500g/袋</span>
      </div>
      <div class="notice-card-content">
        <span>目前这款商品的库存只有5了，请及时补货，以备不虞。</span>
      </div>
      <div class="notice-card-from">
        <span>来自购马精选</span>
        <span>19.08.17</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getReadMessage } from '../../api/index'
import { setNavigationBarTitle, getStorageSync } from '../../api/wechat'
export default {
  data() {
    return {
      providerId: '',
      msgType: '',
      id: ''
    }
  },
  onShow() {
    console.log(this.$route.query)
    this.providerId = getStorageSync('providerId')
    this.msgType = this.$route.query.type
    this.id = this.$route.query.id
    if (this.msgType === '0') {
      setNavigationBarTitle('库存预警详情')
    } else if (this.msgType === '1') {
      setNavigationBarTitle('活动提醒详情')
    } else if (this.msgType === '2') {
      setNavigationBarTitle('违规提醒详情')
    } else if (this.msgType === '3') {
      setNavigationBarTitle('规则变更详情')
    }
    getReadMessage({
      providerId: this.providerId,
      msgType: this.msgType,
      id: this.id
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.notice-detail-main {
.notice-card{
      background: #ffffff;
      padding: 11px;
      margin-top: 10px;
      position: relative;
      .notice-icon{
        border-radius: 50%;
        height: 12px;
        width: 12px;
        background: #D00000;
        position: absolute;
        right: 0;
        top: 0;
      }
      .notice-card-title{
        font-size: 14px;
        font-weight: 600;
        color: #222222;
        margin-bottom: 8px;
      }
      .notice-card-content{
        font-size: 12px;
        color:#222222;
        margin-bottom: 5px;
      }
      .notice-card-from{
        font-size: 12px;
        color: #888888;
        display: flex;
        justify-content: space-between;
      }
    }
}
</style>
