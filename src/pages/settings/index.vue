<template>
  <div class="settings-main">
    <div class="settings-wrapper">
      <field
        disabled
        showAvatar
        labelWidth="20%"
        label="商户头像"
        :avatarUrl ="providerInfo.icon"
        rightIcon="arrow"
      ></field>
      <field
        labelWidth="20%"
        label="商户名称"
        keyWord="name"
        :inputValue="providerInfo.name"
        @onChange="onChange"
      ></field>
      <field
        textarea
        labelWidth="20%"
        label="店铺介绍"
        keyWord="intro"
        :inputValue="providerInfo.intro"
        @onChange="onChange"
      ></field>
    </div>
    <div class="tips">以上内容会展示再商品详情页，请认真填写！</div>
    <div class="changePassword" @click="changePassword">
      <field
        labelWidth="30%"
        label="修改登录密码"
        rightIcon="arrow"
        disabled
      ></field>
    </div>
    <div class="changePassword" @click="changeWithdrawPassword">
      <field
        labelWidth="30%"
        label="修改提现密码"
        rightIcon="arrow"
        disabled
      ></field>
    </div>
    <div class="settings-btn">
      <van-button round @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
import field from '../../components/field.vue'
import imageView from '../../components/base/imageView'
import { getStorageSync } from '../../api/wechat'
import { updateUser } from '../../api/index'

export default {
  components: {
    imageView,
    field
  },
  data() {
    return {
      providerInfo: {}
    }
  },
  onShow() {
    this.init()
  },
  methods: {
    init() {
      this.providerInfo = getStorageSync('providerInfo')
    },
    onChange(keyword, value) {
      // console.log(keyword, value)
      this.providerInfo[keyword] = value
    },
    // 跳转密码修改页面
    changePassword () {
      this.$router.push('/pages/changePassword/main')
    },
    // 跳转修改提现密码页面
    changeWithdrawPassword() {
      this.$router.push('/pages/changeWithdrawPassword/main')
    },
    submit() {
      console.log('== updateUser ==')
      let params = {
        // icon: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9ibEBPOr8oc5ibQAicWO3zbhvgg5VraEH3Z0h0eOjxic1lVqHYTKibC7pS6EqSUqHDLLWdofwJE895tQ/132',
        icon: this.providerInfo.icon,
        name: this.providerInfo.name,
        intro: this.providerInfo.intro
      }
      updateUser(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-main{
  overflow: hidden;
  padding:8px 11px 0px 10px;
  .settings-wrapper{
    box-sizing: border-box;
    border-radius: 10px;
    width:354px;
    // height:346px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    margin: 10px 0;
  }
  .tips{
    color:#888888;
    font-size: 11px;
    margin:15px 0px 15px 5px;
  }
  .changePassword{
    box-sizing: border-box;
    border-radius: 10px;
    width:354px;
    margin: 5px 0;
    background:rgba(255,255,255,1);
    border-radius:5px;
  }
  .settings-btn{
    text-align: center;
    margin-top: 24px;
    padding-bottom: 22px;
    /deep/ .van-button--default{
      background-color: #D00000;
      color: #fff;
      width: 130px;
    }
  }
}
</style>
