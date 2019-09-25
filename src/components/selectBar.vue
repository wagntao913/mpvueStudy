<template>
  <div class="select-bar-main">
    <div class="select-start" @click="selectTime">
      <field placeholder="开始时间" labelWidth="10%" disabled></field>
    </div>
    <div class="select-end" @click="selectTime">
      <field placeholder="结束时间" disabled></field>
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
import field from './field'
export default {
  components: {
    field
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
      console.log(res.mp)
      this.showDatePicker = false
    },
    selectTime() {
      this.showDatePicker = true
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
    background: #FFF;
    width: 169px;
    height: 40px;
    margin-right: 16px;
  }
  .select-end{
    background: #FFF;
    width: 169px;
    height: 40px;
  }
}
</style>
