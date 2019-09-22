<template>
  <div class="auth-main">
    <div class="auth-wrapper">
      <img
      src="https://gouma-jingxuan.oss-cn-hangzhou.aliyuncs.com/product/a9ae31ad-5961-493e-8f32-47db51ce1d45__20190725144735.jpg"
      alt
      mode="widthFix"
      />
      <p>购马精选 邵阳本土有情怀的电商</p>
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getUserInfo() {
        this.$emit('getUserInfo')
      }
    }
  }
</script>

<style lang="scss" scoped>
.auth-main{
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  .auth-wrapper{
    text-align: center;
    img {
      width: 210px;
      margin: 65px auto;
    }
    p {
      font-size: 21px;
      margin-bottom: 110px;
      color: #222222;
    }
    button {
      width: 290px;
      height: 45px;
      line-height: 45px;
      background: #D00000;
      color: #ffffff;
      font-size: 15px;
      border-radius: 23px;
    }
  }
}
</style>
