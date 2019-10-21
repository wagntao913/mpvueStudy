<template>
  <div class="order-manange-main">
    <van-tabs animated sticky color="#D00000" :active="active" @change="changetabs">
      <van-tab title="所有订单" style="overflow: hidden;">
        <div style="margin: 10px;overflow: hidden;">
          <!-- <select-bar></!-->
          <scroll-view @scrolltolower="bindscrolltolower" scroll-y style="height:100%;">
            <div class="card-content" v-for="(item,index) in orderList" :key="index">
              <div class="item-card-main">
                <div class="card-title">
                  <div v-if="item.orderId" class="tips">订单编号： {{ item.sendOrderSn }}</div>
                  <div v-if="item.status" style="color:#FA7921">{{ item.status === 6 ? '已提货' : '待提货'}}</div>
                </div>
                <div class="card-divider"></div>
                <div class="card-content" v-for="(elem,subIndex) in item.orderItem" :key="subIndex">
                  <div class="item-image">
                    <image-view
                      :src="elem.listPageProductPicDefault"
                      width="50px"
                    ></image-view>
                  </div>
                  <div class="item-description">
                    <div class="title">
                      {{ elem.productName  }}
                    </div>
                    <div class="weight">
                      {{ elem.weight }}
                    </div>
                  </div>
                  <div class="item-price">
                    <div class="price">
                      ¥ {{ elem.price }}
                    </div>
                    <div class="amount">
                      x {{ elem.quantity }}
                    </div>
                  </div>
                </div>
                <div class="card-divider"></div>
                <div class="customer-info">
                  <div class="customer-msg">
                    {{ item.consignee }} {{ item.consigneeMobile  }}
                  </div>
                  <div class="buyDate">
                    {{ item.date }}
                  </div>
                </div>
                <div class="total">
                  <div>共{{ item.quantity }}件 合计<i style="color: #D00000;display: inline-block;">{{ item.totalMoney  }}</i></div>
                </div>
              </div>
            </div>
          </scroll-view>
        </div>
      </van-tab>
      <van-tab title="待提货">
        <div style="margin-left: 10px;">
          <select-bar></select-bar>
          <div class="card-content" v-for="(item, index) in orderList" :key="index">
            <div class="item-card-main">
              <div class="card-title">
                <div v-if="item.orderId" class="tips">订单编号： {{ item.orderId }}</div>
                <!-- // 状态 1待发货 2发货 3 签收(已提货) 4完成 6待提货 , -->
                <div v-if="item.status" :style="{color: item.status === 6 ? '#FA7921' : item.status === 4 ? '#21AB10' : item.status === 3 ? '#21AB10' : '#FA7921'}">{{ item.status === 6 ? '待提货' : item.status === 3 ? '已提货' : item.status === 2 ? '发货' : item.status === 1 ? '待发货' : item.status === 4 ? '完成' :''}}</div>
              </div>
              <div class="card-divider"></div>
              <div class="card-content" v-for="(elem, subIndex) in item.orderItem" :key="subIndex">
                <div class="item-image">
                  <image-view
                    :src="item.listPageProductPicDefault"
                    width="50px;"
                  ></image-view>
                </div>
                <div class="item-description">
                  <div class="title">
                    {{ elem.productName  }}
                  </div>
                  <div class="weight">
                    {{ elem.weight }}
                  </div>
                </div>
                <div class="item-price">
                  <div class="price">
                    ¥ {{ elem.price }}
                  </div>
                  <div class="amount">
                    x {{ elem.quantity }}
                  </div>
                </div>
              </div>
              <div class="card-divider"></div>
              <div class="customer-info">
                <div class="customer-msg">
                  {{ item.consignee }} {{ item.consigneeMobile  }}
                </div>
                <div class="buyDate">
                  {{ item.date }}
                </div>
              </div>
              <div class="total">
                <div>共{{ item.quantity }}件 合计<i style="color: #D00000;display: inline-block;">{{ item.totalMoney  }}</i></div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已提货">
        <div style="margin: 10px;">
          <select-bar></select-bar>
          <div class="card-content" v-for="(item,index) in orderList" :key="index">
            <div class="item-card-main">
              <div class="card-title">
                <div v-if="item.orderId" class="tips">订单编号： {{ item.orderId }}</div>
                <div v-if="item.status" style="color:#FA7921">已提货</div>
              </div>
              <div class="card-divider"></div>
              <div class="card-content" v-for="(elem,subIndex) in item.orderItem" :key="subIndex">
                <div class="item-image">
                  <image-view
                    :src="elem.listPageProductPicDefault"
                    width="50px"
                  ></image-view>
                </div>
                <div class="item-description">
                  <div class="title">
                    {{ elem.productName  }}
                  </div>
                  <div class="weight">
                    {{ elem.weight }}
                  </div>
                </div>
                <div class="item-price">
                  <div class="price">
                    ¥ {{ elem.price }}
                  </div>
                  <div class="amount">
                    x {{ elem.quantity }}
                  </div>
                </div>
              </div>
              <div class="card-divider"></div>
              <div class="customer-info">
                <div class="customer-msg">
                  {{ item.consignee }} {{ item.consigneeMobile  }}
                </div>
                <div class="buyDate">
                  {{ item.createTime }}
                </div>
              </div>
              <div class="total">
                <div>
                  共{{ item.summary }}件 合计
                  <i style="color: #D00000;display: inline-block;">{{ item.totalMoney  }}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- <van-tab title="售后退款">
        <refund></refund>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
// import AllOrders from './components/allOrders'
// import Refund from './components/refund'
// import PendingReceipt from './components/pendingReceipt'
// import Received from './components/received'
import SelectBar from '../../components/selectBar.vue'
import imageView from '../../components/base/imageView'
import { getOrderStatus } from '../../api/index'
import { formatTime } from '../../utils/index'
import { getStorageSync, showLoading, hideLoading } from '../../api/wechat'

export default {
  components: {
    SelectBar,
    imageView
    // AllOrders,
    // Refund,
    // PendingReceipt,
    // Received
  },
  data() {
    return {
      active: 0,
      providerId: '',
      status: null,
      pageNum: 1,
      pageSize: 20,
      orderList: []
    }
  },
  onShow() {
    console.log(this.$route.query)
    showLoading('加载中...')
    this.active = this.$route.query.active ? this.$route.query.active : '0'
    if (this.active === '1') {
      this.status = 6
    } else if (this.active === '2') {
      this.status = 3
    } else if (this.active === '3') {
      this.status = 4
    }
    this.providerId = getStorageSync('providerId')
    console.log(this.active)
    this.init()
  },
  methods: {
    init() {
      // 状态 1待发货 2发货 3 签收(已提货) 4完成 6待提货 ,
      getOrderStatus({
        providerId: this.providerId,
        status: this.status,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          // console.log(res.data.data)
          res.data.data.list.forEach(element => {
            console.log(element)
            element.summary = 0
            element.createTime = formatTime(element.createTime * 1000)
            element.consigneeMobile = element.consigneeMobile.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
            if (element.orderItem.length) {
              element.orderItem.forEach(el => {
                element.summary += el.quantity
                element.totalMoney += el.quantity * el.price
              })
            }
          })
          this.orderList = res.data.data.list
        }
        hideLoading()
      }).catch(err => {
        console.log(err)
      })
    },
    onTouchMove() {
      console.log(arguments)
    },
    changetabs(e) {
      console.log(e.mp.detail.index)
      if (e.mp.detail.index === 1) {
        this.status = 6
      } else if (e.mp.detail.index === 2) {
        this.status = 3
      } else {
        this.status = null
      }
      showLoading('加载中...')
      this.init()
    },
    bindscrolltolower() {
      console.log('11111')
    }
  },
  onrReachBottom() {
    console.log('11121')
  }
}
</script>

<style lang="scss" scoped>
.order-manange-main{
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
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item-description{
        width: 75%;
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
        width: 15%;
        .price{
          color: #D00000;
          font-size: 12px;
        }
        .amount{
          font-size: 10px;
          color: #888888;
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
      font-size: 10px;
    }
    .card-divider{
      background-color: #E3E3E3;
      height: 1px;
      margin: 8px;
    }
  }
}
</style>
