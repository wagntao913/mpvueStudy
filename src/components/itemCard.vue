<template>
  <div class="item-card-main">
    <div class="card-title">
      <div v-if="orderNo" class="tips">订单编号： {{ orderNo }}</div>
      <div v-if="status" :style="{color:statusColor}">{{ status }}</div>
    </div>
    <div class="card-divider"></div>
    <div class="card-content">
      <div class="item-image">
        <image-view
          src="/static/images/avatar.jpg"
          width="50px"
        ></image-view>
      </div>
      <div class="item-description">
        <div class="title">
          新疆哈密瓜 西州蜜瓜 水果新鲜一箱现季带箱10斤
        </div>
        <div class="weight">
          5000g
        </div>
      </div>
      <div class="item-price">
        <div class="price">
          ¥29.8
        </div>
        <div class="amount">
          x1
        </div>
      </div>
    </div>
    <div class="card-divider"></div>
    <div class="customer-info">
      <div class="customer-msg">
        张三 152****8463
      </div>
      <div class="buyDate">
        2019.07.16 09:00:06
      </div>
    </div>
    <div class="total">
      <div>共1件 合计<i style="color: #D00000;display: inline-block;">29.80</i></div>
    </div>
  </div>
</template>

<script>
import imageView from './base/imageView'
export default {
  components: {
    imageView
  },
  props: {
    orderNo: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    statusColor: {
      type: String,
      default: '#FA7921'
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card-main{
  box-sizing: border-box;
  width:355px;
  margin:8px 0px 0px 0px;
  background:rgba(255,255,255,1);
  border-radius:5px;
  .card-title{
    padding: 14px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    .tips{

    }
  }
  .card-content{
    padding: 2px 27px 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item-description{
      padding-left: 5px;
      padding-right: 5px;
      .title{
        color:#222222;
        font-size: 12px;
      }
      .weight{
        color: #888888;
        font-size: 10px;
      }
    }
    .item-price{
      display: flex;
      flex-direction: column;
      align-items: center;
      .price{
        color: #D00000;
        font-size: 18px;
      }
      .amount{

      }
    }
  }
  .customer-info{
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
    .customer-msg{
      color: #555555;
      font-size: 10px;
    }
    .buyDate{
      color:#888888;
      font-size: 10px;
    }
  }
  .total{
    padding: 3px 10px 12px 10px;
    text-align: right;

  }
  .card-divider{
    background-color: #E3E3E3;
    height: 1px;
    margin: 8px;
  }
}
</style>
