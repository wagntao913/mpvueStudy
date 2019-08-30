<template>
  <div class="auth-main">
    <div class="auth-wrapper">
      <div class="auth-content"></div>
      <button
        class="auth-btn"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >授权登录</button>forest
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
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  // opacity: 0.38;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .auth-wrapper{
    position: relative;
    width: 270px;
    height: 285px;
    background:#f5f5f5;
    border-radius: 18px;
    .auth-btn{
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      width: 100%;
      height: 49px;
      line-height: 49px;
      font-size: 15px;
      color: #fff;
      background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
      border-radius: 0 0 18px 18px;
    }
  }
}
</style>
