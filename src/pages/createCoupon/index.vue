<template>
  <div class="create-coupon-main">
    <div class="create-coupon-wrapper">
      <van-field
        title-width="110px"
        label="优惠券名称"
        placeholder="请输入优惠券名称"
      ></van-field>
      <van-field
        disabled
        title-width="110px"
        label="使用时间"
        placeholder="请选择起始时间"
        right-icon="arrow"
        @click="selcetDate"
      ></van-field>
      <van-field
      disabled
        title-width="110px"
        label="商品范围"
        placeholder="请选择商品"
        right-icon="arrow"
        @click="selectValue('goods')"
      ></van-field>
      <van-field
        disabled
        title-width="110px"
        label="优惠券金额"
        placeholder="请选择优惠券金额"
        right-icon="arrow"
        @click="selectValue('amount')"
      ></van-field>
      <van-field
        title-width="110px"
        label="使用门槛: 需高于"
        placeholder="优惠券面额"
      >
        <div slot="button">元</div>
      </van-field>
      <van-field
        title-width="110px"
        label="发行数量"
        placeholder="100--1000"
      >
        <div slot="button">张</div>
      </van-field>
      <van-field
        title-width="110px"
        label="每人限领"
        placeholder="请输入领取张数"
      >
        <div slot="button">张</div>
      </van-field>
    </div>
    <!-- 公用弹出框 -->
    <van-popup :show="showPopup" position="bottom">
      <van-picker
        show-toolbar
        title="标题"
        columns="selctList"
        overlayStyle="backgroundColor: rgba(0,0,0,.56)"
        @cancel="cancelSelect"
        @confirm="confirmSelect"
      ></van-picker>
    </van-popup>
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
export default {
  data() {
    return {
      showPopup: false,
      showDatePicker: false,
      selctList: []
    }
  },
  methods: {
    selcetDate () {
      this.showDatePicker = true
    },
    confirmDate (val) {
      console.log(val)
      this.showDatePicker = false
    },
    cancelDate () {
      console.log('==取消==')
      this.showDatePicker = false
    },
    selectValue (type) {
      console.log(type)
      if (type === 'amount') {
        this.showPopup = true
      }
    },
    confirmSelect (val) {
      console.log(val)
      this.showPopup = false
    },
    cancelSelect () {
      console.log('==取消==')
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss" scoped>
.create-coupon-main{
  overflow: hidden;
  padding:8px 11px 0px 10px;
  .create-coupon--wrapper{
    box-sizing: border-box;
    border-radius: 10px;
    width:354px;
    height:246px;
    background:rgba(255,255,255,1);
  }
}
</style>
