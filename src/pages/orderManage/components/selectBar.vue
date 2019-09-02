<template>
  <div class="select-bar-main">
    <div class="select-start">
      <filed placeholder="开始时间" labelWidth="10%"></filed>
    </div>
    <div class="select-end">
      <filed placeholder="结束时间"></filed>
    </div>
     <!-- 时间弹出框 -->
    <van-popup :show="showDatePicker" position="bottom">
      <van-datetime-picker
        type="date"
        @cancel="cancelDate"
        @confirm="confirmDate"
      ></van-datetime-picker>
    </van-popup>
  </div>
</template>

<script>
import Filed from '../../../components/filed'
export default {
  components: {
    Filed
  },
  data() {
    return {
      showDatePicker: false
    }
  },
  methods: {
    cancelDate() {
      this.showDatePicker = false
    },
    confirmDate(res) {
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-bar-main{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  .select-start{
    background: #0aa1ed;
    width: 169px;
    height: 40px;
    margin-right: 16px;
  }
  .select-end{
    background: #0aa1ed;
    width: 169px;
    height: 40px;
  }
}
</style>
