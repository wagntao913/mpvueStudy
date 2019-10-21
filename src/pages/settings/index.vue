<template>
  <div class="settings-main">
    <div class="settings-wrapper">
      <field
        ref="avatar"
        disabled
        showAvatar
        labelWidth="20%"
        label="商户头像"
        :avatarUrl ="providerInfo.icon"
        rightIcon="arrow"
        @onAvatarClick="changeAvatar"
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
import { getStorageSync, setStorageSync, showLoading, hideLoading } from '../../api/wechat'
import { updateUser } from '../../api/index'
import { showToast } from '../../utils'

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
    // 切换头像
    changeAvatar() {
      const vm = this
      mpvue.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          console.log(res.tempFilePaths[0])
          let filePath = res.tempFilePaths[0]
          showLoading('正在上传头像中...')
          if (res.tempFilePaths[0]) {
            mpvue.uploadFile({
              url: 'http://col.gsgouma.com/back/business/upload/uploadFile', // 接口地址
              filePath: filePath,
              name: 'file',
              success: function(res) {
                console.log(res.data.code)
                let msg = JSON.parse(res.data)
                if (msg.code === '000000') {
                  vm.providerInfo.icon = msg.data
                  setStorageSync('providerInfo', vm.providerInfo)
                  hideLoading()
                }
              },
              fail: function(res) {
                console.log(res)
                showToast(res.data.message)
                hideLoading()
              }
            })
          }
        }
      })
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
      showLoading()
      console.log('== updateUser ==')
      // let params = {
      //   // icon: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9ibEBPOr8oc5ibQAicWO3zbhvgg5VraEH3Z0h0eOjxic1lVqHYTKibC7pS6EqSUqHDLLWdofwJE895tQ/132',
      //   icon: this.providerInfo.icon,
      //   name: this.providerInfo.name,
      //   intro: this.providerInfo.intro
      // }
      updateUser(this.providerInfo).then(res => {
        console.log(res)
        hideLoading()
        if (res.data.code === '000000') {
          setStorageSync('providerInfo', this.providerInfo)
        }
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
