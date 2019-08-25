<template>
  <div class="settings-main">
    <div class="settings-wrapper">
      <van-field label="头像" disabled>
        <div slot="button">
          <image-view src="/static/images/avatar.jpg" round width="20px"
          ></image-view>
        </div>
      </van-field>
      <van-field disabled label="商户名称">旺果阳光</van-field>
      <van-field label="修改密码" right-icon="arrow" @click="changePassword" disabled></van-field>
      <van-field label="店铺介绍" type="textarea" autosize></van-field>
      <div class="tips">以上内容会展示再商品详情页，请认真填写！</div>
      <div class="settings-btn">
        <van-button round>提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import imageView from '../../components/base/imageView'
import cell from '../../components/base/cell'
export default {
  components: {
    imageView,
    cell
  },
  methods: {
    // 跳转密码修改页面
    changePassword () {
      this.$router.push('/pages/changePassword/main')
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
    .tips{
      color:#888888;
      font-size: 11px;
      margin:9px 0px 0px 15px;
    }
    .settings-btn{
      text-align: center;
      margin-top: 24px;
      padding-bottom: 22px;
      /deep/ .van-button--default{
        background-color: #FA7921;
        color: #fff;
        width: 130px;
      }
    }
  }
}
</style>
