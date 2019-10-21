<template>
  <div class="activity-main">
    <van-tabs animated sticky swipeable color="#D00000" :active="active">
      <van-tab title="报名">
        <div class="join-box">
          <div class="activity-box" @click="jumpTo('spike')">
            <div>
              <i class="iconfont icon-seckill icon-item" style="font-size:37px;"></i>
            </div>
            <div>
              <p style="font-size:25px;font-weight:500">限时秒杀</p>
              <p style="font-size: 12px">报名参加限时秒杀活动</p>
            </div>
          </div>
          <div class="activity-box" @click="jumpTo('presale')">
            <div>
              <i class="iconfont icon-yushou  icon-item" style="font-size: 42px"></i>
            </div>
            <div>
              <p style="font-size: 25px;font-weight:500">预售活动</p>
              <p style="font-size: 12px">报名参加预售活动</p>
            </div>
          </div>
        </div>
        <div class="join-info">
          <p>温馨提示：</p>
          <ul>
            <li>1、每个商户每天最多只能参加一场限时秒杀和一场预售活动。</li>
            <li>2、报名提交资料后，平台安排参与的场次之后会联系您。</li>
            <li>3、在报名活动的过程中有何疑问可致电：18152802238（曾先生） 。</li>
            <li>4、关于活动,本平台拥有最终解释权。</li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="我的秒杀">
        <!-- <div class="card" style="margin-left: 10px;">
          <div class="card-title">
            <div class="tips">订单编号： {{ item.orderId }}</div>
            <div style="color:#0aa1ed">进行中</div>
          </div>
          <div class="card-divider"></div>
          <div class="item-box">
            <div class="item-img">
              <image-view
                :src="item.listPageProductPicDefault"
                width="50px;"
              ></image-view>
            </div>
            <div class="item-instro">
              <div class="item-title">
                {{ item.productName }}
              </div>
              <div class="item-info">
                <div style="color:#d00000;">
                  <div>￥{{ item.price }}</div>
                </div>
                <div>
                  <div>销量：{{ item.salesCout }}</div>
                  <div>{{ item.quantity }}</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </van-tab>
      <van-tab title="我的预售">
        <!-- <div class="card" style="margin-left: 10px;">
          <div class="card-title">
            <div class="tips">订单编号： {{ item.orderId }}</div>
            <div style="color:#0aa1ed">进行中</div>
          </div>
          <div class="card-divider"></div>
          <div class="item-box">
            <div class="item-img">
              <image-view
                :src="item.listPageProductPicDefault"
                width="50px;"
              ></image-view>
            </div>
            <div class="item-instro">
              <div class="item-title">
                {{ item.productName }}
              </div>
              <div class="item-info">
                <div style="color:#d00000;">
                  <div>￥{{ item.price }}</div>
                </div>
                <div>
                  <div>销量：{{ item.salesCout }}</div>
                  <div>{{ item.quantity }}</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </van-tab>
      <van-tab title="已结束">
        <!-- <div class="card" style="margin-left: 10px;">
          <div class="card-title">
            <div class="tips">订单编号： {{ item.orderId }}</div>
            <div style="color:#0aa1ed">已结束</div>
          </div>
          <div class="card-divider"></div>
          <div class="item-box">
            <div class="item-img">
              <image-view
                :src="item.listPageProductPicDefault"
                width="50px;"
              ></image-view>
            </div>
            <div class="item-instro">
              <div class="item-title">
                {{ item.productName }}
              </div>
              <div class="item-info">
                <div style="color:#d00000;">
                  <div>￥{{ item.price }}</div>
                </div>
                <div>
                  <div>销量：{{ item.salesCout }}</div>
                  <div>{{ item.quantity }}</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import itemCard from '../../components/itemCard'
import { getListPresell, getListSeckill, getListPresellEnd } from '../../api/index'
import { getStorageSync } from '../../api/wechat'
export default {
  components: {
    itemCard
  },
  data() {
    return {
      providerId: ''
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
    this.getListPre({
      id: this.providerId,
      pageNum: 1,
      pageSize: 10
    })
    this.getListSec({
      id: this.providerId,
      pageNum: 1,
      pageSize: 10
    })
    this.getListPreEnd({
      id: this.providerId,
      pageNum: 1,
      pageSize: 10
    })
  },
  methods: {
    jumpTo(active) {
      console.log(active)

      if (active === 'spike') {
        this.$router.push({
          path: '/pages/activitySpike/main'
        })
      } else if (active === 'presale') {
        this.$router.push({
          path: '/pages/activityPresale/main'
        })
      }
    },
    getListPre() {
      console.log('== list ==')
      getListPresell().then(res => {
        console.log(res)
      })
    },
    getListSec() {
      console.log('== getListSec ==')
      getListSeckill().then(res => {
        console.log(res)
      })
    },
    getListPreEnd() {
      console.log('== getListPreEnd ==')
      getListPresellEnd().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-main{
  .join-box{
    text-align: center;
    margin-top: 45px;
    .activity-box{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #FFC0C0;
      height: 77px;
      width: 225px;
      margin: 10px auto 24px;
      border-radius: 5px;
      .icon-item{
        color: #d00000;
      }
    }
  }
  .join-info{
    text-align: left;
    padding-left: 20px;
    margin-top: 75px;
    font-size: 10px;
    p{
      font-size: 13px;
      font-weight: 500;
    }
    ul{
      color: #555555;
      li{
        padding: 5px;
      }
    }
  }
  .card{
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
    .card-divider{
      background-color: #E3E3E3;
      height: 1px;
      margin: 8px;
    }
    .item-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 76px;
      padding: 5px;

      .item-img{
        width: 20%;
      }
      .item-instro{
        width: 80%;
        font-size:13px;
        .item-title{}
        .item-info{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size:12px;
        }
      }
    }
  }
}
</style>
