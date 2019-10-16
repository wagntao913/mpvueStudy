<template>
  <div class="notice-main">
    <div class="inventory-warning">
      <div class="warning-title">
        库存预警
      </div>
      <div class="warning-card">
        <div class="notice-icon"></div>
        <div class="warning-card-title">
          <span>天香情 新疆红枣 500g/袋</span>
        </div>
        <div class="warning-card-content">
          <span>目前这款商品的库存只有5了，请及时补货，以备不虞。</span>
        </div>
        <div class="warning-card-from">
          <span>来自购马精选</span>
          <span>19.08.17</span>
        </div>
      </div>
    </div>
    <div class="activity-reminder">
      <div class="reminder-title">
        活动提醒
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.notice-main {
  box-sizing: border-box;
  margin: 10px 11px;
  // padding: 20px 0;
  .inventory-warning {
    background: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
    .warning-title{
      font-size: 15px;
      font-weight: 700;
    }
    .warning-card{
      background: #F3F3F3;
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
      .warning-card-title{
        font-size: 14px;
        font-weight: 600;
        color: #222222;
        margin-bottom: 8px;
      }
      .warning-card-content{
        font-size: 12px;
        color:#222222;
        margin-bottom: 5px;
      }
      .warning-card-from{
        font-size: 12px;
        color: #888888;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .activity-reminder {
    // width: 355px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
