<template>
  <div class="activity-info-main">
    <div class="baseInfo-content">
      <field
        ref="phone"
        labelWidth="23%"
        type="password"
        label="联系电话:"
        placeholder="请填写联系电话"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        ref="product"
        rightIcon="plus"
        color="#D00000"
        labelWidth="23%"
        size="20px"
        type="password"
        label="选择商品:"
        keyWord="products"
        placeholder="请选择参加限时秒杀活动的商品"
        @onIconClick="addProduct"
        @onChange="onChange"
        disabled
      ></field>
      <field
        ref="commodtiyPrice"
        labelWidth="23%"
        type="password"
        label="商品原价:"
        placeholder="请填写商品原价"
        keyWord="commodtiyPrice"
        @onChange="onChange"
      ></field>
      <field
        ref="seckillPrice"
        v-if="pageType === 'presale'"
        labelWidth="23%"
        label="预售价格:"
        placeholder="请填写预售价格"
        keyWord="seckillPrice"
        @onChange="onChange"
      ></field>
      <field
        ref="seckillPrice"
        v-if="pageType === 'spike'"
        labelWidth="23%"
        type="password"
        label="秒杀价格:"
        placeholder="请填写秒杀价格"
        keyWord="seckillPrice"
        @onChange="onChange"
      ></field>
      <field
        ref="actCount"
        labelWidth="23%"
        type="password"
        label="商品数量:"
        placeholder="请填写活动库存"
        keyWord="actCount"
        @onChange="onChange"
      ></field>
    </div>
    <div @click="readMsg">
      <!-- <check-group  @change="readNotice"> -->
      <checkbox :value="isRead" :checked="isRead" class="checked-box">
        <span>活动须知</span>
        <span style="font-size:12px;color: #888888;">（签署协议后方能提交活动报名商品）</span>
      </checkbox>
      <!-- </check-group> -->
    </div>
    <div class="activity-submit-btn">
      <van-button round @click="addNew">添加下一个活动商品</van-button>
      <van-button round @click="submit">提交</van-button>
    </div>
     <!-- 商品选择弹出框 -->
    <van-popup :show="showPopup" position="right" custom-style="width: 80%;height: 100%;">
      <div style="height: 100%;" class="goods-modal">
        <scroll-view @scrolltolower="bindscrolltolower" scroll-y style="height: 96%;">
          <radio-group @change="checkGroupChange">
            <radio
              style="border-bottom: 1px solid #eee;margin-left:3px;"
              :value="item.productName+'_'+item.productId"
              v-for="(item, index) in goodsList"
              :key="index"
            >
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
            </radio>
          </radio-group>
        </scroll-view>
        <div class="goods-submit">
          <!-- <div>合计 {{ selectTotal }} 个 </div> -->
          <van-button plain hairline mini color="#D00000" style="width: 100%" @click="confirm">确认</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import field from '../../components/field.vue'
import imageView from '../../components/base/imageView'
import { setNavigationBarTitle, showToast, getStorageSync } from '../../api/wechat'
import { getListGoods, addActivity } from '../../api/index'
export default {
  components: {
    field,
    imageView
  },
  data() {
    return {
      pageType: 'spike',
      phone: '',
      commodtiyPrice: '',
      providerId: '',
      productId: '',
      seckillPrice: '',
      actCount: '',
      isRead: false,
      showPopup: false,
      goodsList: [],
      pageSize: 10,
      pageNum: 1,
      total: 1
    }
  },
  mounted() {
    // console.log(this.$route.query)
    // this.pageType = this.$route.query.type
    if (this.pageType === 'spike') {
      setNavigationBarTitle('报名参加限时秒杀')
    } else if (this.pageType === 'presale') {
      setNavigationBarTitle('报名参加预售活动')
    }
    this.providerId = getStorageSync('providerId')
    // 初始化商品数据
    this.pageNum = 1
    this.getGoods(this.pageNum)
  },
  methods: {
    // filed组件的双向数据绑定
    onChange(keyword, value) {
      this[keyword] = value
    },
    // 展示商品选择弹框
    addProduct () {
      this.showPopup = true
    },
    // 获取商品数据
    getGoods(pageNum) {
      getListGoods({
        id: this.providerId,
        pageNum: pageNum,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          let recMsg = res.data.data.goodsDetailEntities
          this.goodsList.push(...recMsg)
          this.total = res.data.data.total
        }
      })
    },
    // 下拉加载更多商品
    bindscrolltolower() {
      console.log('sssss')
      this.pageNum++
      let pages = Math.ceil(this.total / this.pageSize)
      if (this.pageNum < pages || this.pageNum === pages) {
        this.getGoods(this.pageNum)
      } else {
        showToast('没有更多商品了')
      }
    },
    // 确认选择商品
    confirm() {
      this.showPopup = false
      // this.$refs.goods.setValue(`已选择${this.selectGoodsList.length}个`)
      console.log(this.selectGoodsList)
    },
    checkGroupChange(e) {
      console.log('groupChange', e.mp.detail.value)
      // this.selectGoodsList = e.mp.detail.value
      this.productId = e.mp.detail.value.split('_')[1]
      this.$refs.product.setValue(e.mp.detail.value.split('_')[0])
    },
    readNotice(e) {
      console.log(e)
    },
    // 活动须知
    readMsg() {
      console.log('== readMsg ==')
      this.isRead = !this.isRead
    },
    addNew() {
      console.log('== addNew ==')
    },
    // 提交
    submit() {
      console.log('== submit ==')
      if (!this.phone) {
        showToast('请输入联系电话！')
        return false
      } else if (!this.providerId) {
        showToast('请选择参见活动的商品！')
      } else if (!this.commodtiyPrice) {
        showToast('请填写商品原价！')
      } else if (!this.seckillPrice) {
        showToast('请填写预售价格/秒杀价格！')
      } else if (!this.actCount) {
        showToast('请填写活动库存！')
      }
      let params = {
        phone: this.phone,
        type: 1,
        providerId: this.providerId,
        seckillPrice: this.seckillPrice,
        productId: this.productId,
        commodtiyPrice: this.commodtiyPrice,
        actCount: this.actCount,
        isCheck: 0,
        addTime: new Date().getTime()
      }
      console.log(params)
      if (this.isRead) {
        addActivity(params).then(res => {
          console.log(res)
          if (res.data.code === '000000') {
            showToast('活动申请已提交！')
            this.onLoad()
          }
        })
      } else {
        showToast('签署协议后方能提交活动报名商品')
      }
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
  .goods-modal{
    height: 100%;
    min-height: 375px;
    background: #fff;
    .item-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 76px;
      padding: 8px;
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
          padding: 0 5px;
        }
      }
    }
    .goods-submit{
      background: #fff;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      /deep/ .van-button--default{
        background-color: #D00000;
        width: 100%;
        color: #fff;
      }
    }
  }
  /deep/ .van-popup{
    overflow: hidden;
  }
}
</style>
