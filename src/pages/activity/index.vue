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
        <div>
          <item-card
            orderNo="123546456446"
            status="进行中"
          ></item-card>
        </div>
      </van-tab>
      <van-tab title="我的预售">
        <div>
          <item-card
            orderNo="123546456446"
            status="进行中"
          ></item-card>
        </div>
      </van-tab>
      <van-tab title="已结束">
        <div>
          <item-card
            orderNo="123546456446"
            status="已结束"
          ></item-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import itemCard from '../../components/itemCard'
export default {
  components: {
    itemCard
  },
  data() {
    return {
      key: 'value'
    }
  },
  methods: {
    jumpTo(type) {
      this.$router.push({
        path: '/pages/activitySpike/main',
        query: { type: type }
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
}
</style>
