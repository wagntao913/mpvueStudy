<template>
  <div class="activity-info-main">
    <div class="baseInfo-content">
      <field
        labelWidth="23%"
        type="password"
        label="联系电话:"
        placeholder="请填写联系电话"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        rightIcon="plus"
        color="#D00000"
        labelWidth="23%"
        size="20px"
        type="password"
        label="选择商品:"
        keyWord="phone"
        placeholder="请选择参加限时秒杀活动的商品"
        @onIconClick="addProduct"
        @onChange="onChange"
      ></field>
      <field
        labelWidth="23%"
        type="password"
        label="商品原价:"
        placeholder="请填写商品原价"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        v-if="pageType === 'presale'"
        labelWidth="23%"
        type="password"
        label="预售价格:"
        placeholder="请填写预售价格"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        v-if="pageType === 'spike'"
        labelWidth="23%"
        type="password"
        label="秒杀价格:"
        placeholder="请填写秒杀价格"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        labelWidth="23%"
        type="password"
        label="商品数量:"
        placeholder="请填写活动库存"
        keyWord="phone"
        @onChange="onChange"
      ></field>
    </div>
    <div>
      <checkbox v-model="checked" class="checked-box"/>
      <span @click="readMsg">活动须知</span>
      <span style="font-size:12px;color: #888888;">（签署协议后方能提交活动报名商品）</span>
    </div>
    <div class="activity-submit-btn">
      <van-button round @click="submit">添加下一个活动商品</van-button>
      <van-button round @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
import field from '../../components/field.vue'
import { setNavigationBarTitle } from '../../api/wechat'
export default {
  components: {
    field
  },
  data() {
    return {
      pageType: '',
      phone: '',
      checked: false
    }
  },
  onShow() {
    console.log(this.$route)
    this.pageType = this.$route.query.type
    if (this.pageType === 'spike') {
      setNavigationBarTitle('报名参加限时秒杀')
    } else if (this.pageType === 'presale') {
      setNavigationBarTitle('报名参加预售活动')
    }
  },
  methods: {
    // filed组件的双向数据绑定
    onChange(keyword, value) {
      this[keyword] = value
    },
    addProduct() {
      console.log('== addProduct ==')
    },
    // 活动须知
    readMsg() {
      console.log('== readMsg ==')
    },
    // 提交
    submit() {
      console.log('== submit ==')
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-info-main{
  // width: 100%;
  box-sizing: border-box;
  margin: 10px 11px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 0;
  .baseInfo-content{
    height:302px;
    // width: 354px;
    padding: 5px;
  }
  .activity-submit-btn{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 20px;
    /deep/ .van-button--default{
      background-color: #D00000;
      color: #fff;
      width: 130px;
    }
  }
  .checked-box{
    padding: 5px;
  }
}
</style>
