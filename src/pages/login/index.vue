<template>
  <div class="login-main">
    <div class="login-banner">
      <div class="app-logo">
        <image-view
          src="https://gouma-jingxuan.oss-cn-hangzhou.aliyuncs.com/product/a9ae31ad-5961-493e-8f32-47db51ce1d45__20190725144735.jpg"
          round
          heihgt="200px"
          width="150px"
        ></image-view>
      </div>
      <div class="banner-text">
        购马精选 邵阳本土有情怀的电商
      </div>
    </div>
    <div class="login-box">
      <div class="login-content">
        <field
          placeholder="手机号码"
          leftIcon="phone"
          keyWord="phone"
          @onChange="onChange"
          @onblur="onblur('phone')"
        ></field>
        <field
          password
          placeholder="密码"
          leftIcon="lock"
          keyWord="password"
          @onChange="onChange"
          @onblur="onblur('password')"
        ></field>
      </div>
      <div class="login-btn">
        <van-button round size="large" @click="login">登录</van-button>
        <div class="froget-password" @click="forgetPassword">
          忘记密码？
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import field from '../../components/filed.vue'
import imageView from '../../components/base/imageView.vue'
import { showToast, getStorageSync, setStorageSync } from '../../api/wechat'
import { userLogin } from '../../api/index'
import { passwordChange } from '../../utils/index'

export default {
  components: {
    field,
    imageView
  },
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  mounted() {},
  methods: {
    onChange(keyword, value) {
      console.log(keyword, value)
      this[keyword] = value
    },
    onblur(type) {
      if (type === 'phone') {
        if (!this.phone) {
          showToast('请输入手机号!')
          return false
        } else if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
          showToast('请输入正确的手机号!')
          return false
        }
      } else if (type === 'password') {
        if (!this.password) {
          showToast('请输入密码!')
          return false
        }
      }
    },
    login() {
      if (!this.phone) {
        showToast('请输入手机号!')
        return false
      } else if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
        showToast('手机号不合法，请重新输入')
        return false
      } else if (!this.password) {
        showToast('请输入密码！')
        return false
      }
      let openId = getStorageSync('openId')
      let md5Password = passwordChange(this.password)
      userLogin(this.phone, md5Password, openId).then(res => {
        console.log(res)
        if (res.data.code === '000000') {
          console.log(res.data.data)
          setStorageSync('providerInfo', res.data.data)
          setStorageSync('providerId', res.data.data.providerId)
          this.$router.push('/pages/index/main')
        } else {
          showToast(res.data.message)
        }
      })
      console.log('== login ==')
    },
    forgetPassword() {
      console.log('== forgetPassword ==')
      this.$router.push('/pages/forgetPassword/main')
    }
  }
}
</script>
<style lang="scss" scoped>

.login-main{
  height: 100%;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  box-sizing: border-box;
  background: linear-gradient(#D00000, #ffffff 60%);
  .login-banner{
    height: 300px;
    padding-top: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .app-logo{
      margin-bottom: 40px;
    }
  }
  .login-box{
    padding: 0px 18px 19px 10px;
    .login-content{
      padding-bottom: 60px;
    }
    .login-btn{
      position: relative;
      .froget-password{
        position: absolute;
        bottom: -25px;
        right: 4px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(250,121,33,1);
        // line-height:50px;
      }
      /deep/ .van-button--default{
        background-color: #D00000;
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>
