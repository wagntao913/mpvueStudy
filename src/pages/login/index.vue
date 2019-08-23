<template>
  <div class="login-main">
    <div class="login-banner">
      <div class="app-logo">
        <image-view
          src="/static/images/avatar.jpg"
          round
        ></image-view>
      </div>
      <div class="banner-text">
        购马精选 邵阳本土有情怀的电商
      </div>
    </div>
    <div class="login-box">
      <div class="login-content">
        <van-field
          placeholder="手机号码"
          left-icon="phone"
        ></van-field>
        <van-field
          placeholder="密码"
          left-icon="lock"
        ></van-field>
      </div>
      <div class="login-btn">
        <van-button round size="large">登录</van-button>
        <div class="froget-password">
          忘记密码？
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageView from '../../components/base/imageView.vue'
export default {
  components: {
    imageView
  },
  data () {
    return {
      test: 'login'
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.login-main{
  background: #fff;
  height: 667px;
  box-sizing: border-box;
  .login-banner{
    height: 300px;
    padding-top: 57px;
    background-color: #D00000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .app-logo{
      height: 105px;
      width:100px;
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
