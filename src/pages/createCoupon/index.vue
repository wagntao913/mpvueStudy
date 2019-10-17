<template>
  <div class="create-coupon-main">
    <div class="create-coupon-wrapper">
      <field
        labeWidth="50%"
        label="优惠券名称"
        inputAlign="right"
        keyWord="couponName"
        placeholder="请输入优惠券名称"
        @onChange="onChange"
      ></field>
      <picker mode="date" :value="popupInfo.startTime" @change="bindDateChange('start', arguments)">
        <field
          disabled
          ref="start"
          labeWidth="50%"
          label="开始时间"
          inputAlign="right"
          keyWord="startTime"
          placeholder="请选择开始时间"
          right-icon="arrow"
          @onChange="onChange"
        ></field>
      </picker>
      <picker mode="date" :value="popupInfo.endTime" @change="bindDateChange('end', arguments)">
        <field
          disabled
          labeWidth="50%"
          label="结束时间"
          ref="end"
          inputAlign="right"
          keyWord="endTime"
          placeholder="请选择结束时间"
          right-icon="arrow"
          @onChange="onChange"
        ></field>
      </picker>
      <field
        disabled
        ref="goods"
        labeWidth="50%"
        label="商品范围"
        placeholder="请选择商品"
        right-icon="arrow"
        inputAlign="right"
        keyWord="products"
        @onIconClick="selectGoods"
        @onChange="onChange"
      ></field>
      <picker mode="selector" :range="selectList" range-key="discountAmount" @change="bindPickerChange">
        <field
          disabled
          ref="couponPrice"
          labeWidth="50%"
          label="优惠券金额"
          placeholder="请选择优惠券金额"
          rightIcon="arrow"
          inputAlign="right"
          keyWord="couponPrice"
          rightUnit="元"
          @onChange="onChange"
        ></field>
      </picker>
      <field
        labeWidth="50%"
        inputAlign="right"
        keyWord="usePrice"
        label="使用门槛: 需高于"
        placeholder="优惠券面额"
        rightUnit="元"
        @onChange="onChange"
      >
      </field>
      <field
        labeWidth="50%"
        inputAlign="right"
        keyWord="quantity"
        label="发行数量"
        placeholder="100--1000"
        rightUnit="张"
        @onChange="onChange"
      >
      </field>
    </div>
    <div class="create-coupon-btn">
      <van-button round @click="submit">提交</van-button>
    </div>
    <!-- 商品选择弹出框 -->
    <van-popup :show="showPopup" position="right" custom-style="width: 80%;">
      <div style="height: 100%;" class="goods-modal">
        <scroll-view>
          <checkbox-group @change="checkGroupChange">
            <checkbox
              style="border-bottom: 1px solid #eee;margin-left:3px;"
              :value="item.productId"
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
                    <div style="color:#d00000;">￥{{ item.price }}</div>
                    <div>
                      <div>销量：1052</div>
                      <div>库存：2152</div>
                    </div>
                  </div>
                </div>
              </div>
            </checkbox>
          </checkbox-group>
        </scroll-view>
        <div class="goods-submit">
          <div>合计 {{ selectTotal }} 个 </div>
          <van-button plain hairline mini color="#D00000" style="width: 35%" @click="confirm">确认</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import field from '../../components/field'
import imageView from '../../components/base/imageView'
// import { formatTime } from '../../utils/index'
import { showToast, getStorageSync } from '../../api/wechat'
import { addCoupon, getCouponPriceList, getListGoods } from '../../api/index'
export default {
  components: {
    imageView,
    field
  },
  data() {
    return {
      popupTitle: '',
      showPopup: false,
      showDatePicker: false,
      selectList: [],
      goodsList: [],
      selectGoodsList: [],
      popupInfo: {},
      providerId: '',
      selectTotal: '',
      pageNum: 1,
      pageSize: 8
    }
  },
  onShow() {
    this.providerId = getStorageSync('providerId')
    getCouponPriceList({}).then(res => {
      console.log(res)
      if (res.data.code === '000000') {
        this.selectList = res.data.data
      }
    })
    getListGoods({
      id: this.providerId,
      pageNum: 1,
      pageSize: 8
    }).then(res => {
      console.log(res)
      if (res.data.code === '000000') {
        this.goodsList = res.data.data.list
      }
    })
  },
  methods: {

    onChange(keyword, value) {
      // console.log(keyword, value)
      this.popupInfo[keyword] = value
    },
    // 展示商品选择弹框
    selectGoods () {
      this.showPopup = true
    },
    checkGroupChange(e) {
      console.log('groupChange', e.mp.detail.value)
      this.selectGoodsList = e.mp.detail.value
      this.selectTotal = this.selectGoodsList.length
      // selects.forEach(element => {
      //   console.log(element)
      //   if (!vm.selectGoodsList.includes(element)) {
      //     vm.selectGoodsList.push(element)
      //   }
      // })
    },
    // 确认选择商品
    confirm() {
      this.showPopup = false
      this.$refs.goods.setValue(`已选择${this.selectGoodsList.length}个`)
      console.log(this.selectGoodsList)
    },
    // 日期选择
    bindDateChange(type, arg) {
      console.log(type, arg[0])
      let selectVlaue = arg[0].mp.detail.value
      if (type === 'start') {
        this.popupInfo.startTime = selectVlaue
        this.$refs.start.setValue(selectVlaue)
      } else if (type === 'end') {
        this.popupInfo.endTime = selectVlaue
        this.$refs.end.setValue(selectVlaue)
      }
    },
    // 通用选择
    bindPickerChange(e) {
      console.log(e.mp)
      let index = e.mp.detail.value
      let selectvalue = this.selectList[index]
      this.popupInfo.couponPrice = selectvalue.discountAmount
      this.$refs.couponPrice.setValue(selectvalue.discountAmount)
    },
    submit() {
      console.log('== submit ==')
      if (!this.popupInfo.couponName) {
        showToast('请输入优惠券名称！')
        return false
      } else if (!this.popupInfo.startTime) {
        showToast('请选择开始时间！')
        return false
      } else if (!this.popupInfo.endTime) {
        showToast('请选择结束时间！')
        return false
      } else if (!this.popupInfo.couponPrice) {
        showToast('请输入优惠券金额！')
        return false
      } else if (!this.popupInfo.usePrice) {
        showToast('请输入优惠券使用门槛！')
        return false
      } else if (!this.popupInfo.quantity) {
        showToast('请输入优惠券发行数量！')
        return false
      } else if (this.selectGoodsList.length === 0) {
        showToast('请选择优惠券适用商品！')
        return false
      }
      // 写死的数据
      this.popupInfo.type = 2
      this.popupInfo.products = this.selectGoodsList.join(',')
      this.popupInfo.isProscenium = 1
      this.popupInfo.indateStatus = 1
      this.popupInfo.prefix = 'DPC'
      this.popupInfo.explain = '店铺优惠券'
      this.popupInfo.dayCount = ''
      this.popupInfo.providers = getStorageSync('providerId')
      addCoupon(this.popupInfo).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          showToast('优惠券创建成功！')
          setTimeout(() => {
            this.$router.back()
          }, 1000)
        } else {
          showToast(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.create-coupon-main{
  overflow: hidden;
  padding:8px 11px 0px 10px;
  .create-coupon-wrapper{
    box-sizing: border-box;
    border-radius: 5px;
    background:#fff;
  }
  .create-coupon-btn{
    text-align: center;
    margin-top: 50px;
    /deep/ .van-button--default{
      background-color: #D00000;
      color: #fff;
      width: 130px;
    }
  }
  .goods-modal{
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
    .goods-submit{
      background: #fff;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      /deep/ .van-button--default{
        background-color: #D00000;
        width: 100%;
        color: #fff;
      }
    }
  }
  /deep/ .van-popup{
    overflow: scroll;
  }
}
</style>
