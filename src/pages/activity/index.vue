<template>
  <div class="activity-main">
    <van-tabs animated sticky swipeable color="#D00000" :active="active">
      <van-tab title="报名">
        <all-orders></all-orders>
      </van-tab>
      <van-tab title="我的秒杀">
        <pending-receipt></pending-receipt>
      </van-tab>
      <van-tab title="我的预售">
        <received></received>
      </van-tab>
      <van-tab title="已结束">
        <refund></refund>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
.activity-main{}
</style>
