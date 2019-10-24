<template>
  <div class="notice-main">
    <div class="notice-box">
      <div class="box-title">
        库存预警
      </div>
      <div class="notice-card" @click="showdetail(0, item.id)" v-for="(item,index) in messageTpye0" :key="index">
        <div class="notice-icon" v-show="item.iRead === 0" ></div>
        <div class="notice-card-title">
          <span>{{item.title}}</span>
        </div>
        <div class="notice-card-content">
          <span>{{item.content}}</span>
        </div>
        <div class="notice-card-from">
          <span>来自购马精选</span>
          <span>{{ item.addTime }}</span>
        </div>
      </div>
    </div>
    <div class="notice-box">
      <div class="box-title">
        活动提醒
      </div>
      <div class="notice-card" @click="showdetail(1)" v-for="(item,index) in messageTpye1" :key="index">
        <div class="notice-icon" v-show="item.iRead === 0" ></div>
        <div class="notice-card-title">
          <span>{{item.title}}</span>
        </div>
        <div class="notice-card-content">
          <span>{{item.content}}</span>
        </div>
        <div class="notice-card-from">
          <span>来自购马精选</span>
          <span>{{ item.addTime }}</span>
        </div>
      </div>
    </div>
    <div class="notice-box">
      <div class="box-title">
        违规提醒
      </div>
      <div class="notice-card" @click="showdetail(2)" v-for="(item,index) in messageTpye2" :key="index">
        <div class="notice-icon" v-show="item.iRead === 0" ></div>
        <div class="notice-card-title">
          <span>{{item.title}}</span>
        </div>
        <div class="notice-card-content">
          <span>{{item.content}}</span>
        </div>
        <div class="notice-card-from">
          <span>来自购马精选</span>
          <span>{{ item.addTime }}</span>
        </div>
      </div>
    </div>
    <div class="notice-box">
      <div class="box-title">
        规则变更提醒
      </div>
      <div class="notice-card"  @click="showdetail(3)" v-for="(item,index) in messageTpye3" :key="index">
        <div class="notice-icon" v-show="item.iRead === 0" ></div>
        <div class="notice-card-title">
          <span>{{item.title}}</span>
        </div>
        <div class="notice-card-content">
          <span>{{item.content}}</span>
        </div>
        <div class="notice-card-from">
          <span>来自购马精选</span>
          <span>{{ item.addTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMessqgeList } from '../../api/index'
import { getStorageSync } from '../../api/wechat'
import { formatTime } from '../../utils/index'
export default {
  data() {
    return {
      providerId: '',
      messageTpye0: [],
      messageTpye1: [],
      messageTpye2: [],
      messageTpye3: []
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
    this.messageList()
  },
  methods: {
    messageList() {
      getMessqgeList(this.providerId).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          let recMsg = res.data.data
          recMsg.forEach(el => {
            el.messageEntityList.forEach(element => {
              element.addTime = formatTime(element.addTime)
            })
            if (el.type === 0) {
              this.messageTpye0 = el.messageEntityList
            } else if (el.type === 1) {
              this.messageTpye1 = el.messageEntityList
            } else if (el.type === 2) {
              this.messageTpye2 = el.messageEntityList
            } else if (el.type === 3) {
              this.messageTpye3 = el.messageEntityList
            }
          })
        }
      })
    },
    // 查看详情
    showdetail(type, id) {
      console.log('== showDetail ==')
      this.$router.push({
        path: '/pages/noticeDetail/main',
        query: {
          type: type,
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice-main {
  box-sizing: border-box;
  margin: 10px 11px;
  // padding: 20px 0;
  .notice-box {
    background: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
    .box-title{
      font-size: 15px;
      font-weight: 700;
    }
    .notice-card{
      background: #F3F3F3;
      padding: 11px;
      margin-top: 10px;
      position: relative;
      .notice-icon{
        border-radius: 50%;
        height: 12px;
        width: 12px;
        background: #D00000;
        position: absolute;
        right: 0;
        top: 0;
      }
      .notice-card-title{
        font-size: 14px;
        font-weight: 600;
        color: #222222;
        margin-bottom: 8px;
      }
      .notice-card-content{
        font-size: 12px;
        color:#222222;
        margin-bottom: 5px;
      }
      .notice-card-from{
        font-size: 12px;
        color: #888888;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .activity-reminder {
    // width: 355px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
