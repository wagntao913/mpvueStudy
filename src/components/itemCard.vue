<template>
  <div class="item-card-main">
    <div class="card-title">
      <div v-if="orderList.orderId" class="tips">订单编号： {{ orderList.orderId }}</div>
      <div v-if="orderList.status" :style="{color:statusColor}">{{ orderList.status }}</div>
    </div>
    <div class="card-divider"></div>
    <div class="card-content">
      <div class="item-image">
        <image-view
          :src="orderList.url"
          width="50px"
        ></image-view>
      </div>
      <div class="item-description">
        <div class="title">
          {{ orderList.productName  }}
        </div>
        <div class="weight">
          {{ orderList.weight }}
        </div>
      </div>
      <div class="item-price">
        <div class="price">
          ¥ {{ orderList.price }}
        </div>
        <div class="amount">
          x {{ orderList.quantity }}
        </div>
      </div>
    </div>
    <div class="card-divider"></div>
    <div class="customer-info">
      <div class="customer-msg">
        {{ orderList.consignee }} {{ orderList.consigneeMobile  }}
      </div>
      <div class="buyDate">
        {{ orderList.date }}
      </div>
    </div>
    <div class="total">
      <div>共{{ orderList.quantity }}件 合计<i style="color: #D00000;display: inline-block;">{{ orderList.totalMoney  }}</i></div>
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
    orderList: {
      type: Object,
      default: () => {}
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
