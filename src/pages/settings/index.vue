<template>
  <div class="settings-mian">
    <div class="settings-wrapper">
      <div>
        <van-field label="头像" disabled>
          <div slot="button">
            <image-view
              src="/static/images/avatar.jpg"
              round
              width="30px"
            ></image-view>
          </div>
        </van-field>
        <van-field disabled label="商户名称"></van-field>
        <van-field label="修改密码" right-icon="arrow" disabled></van-field>
        <van-field label="店铺介绍" type="textarea" autosize rows="3"></van-field>
      </div>
    </div>
  </div>
</template>

<script>
import imageView from '../../components/base/imageView'
export default {
  components: {
    imageView
  }
}
</script>

<style lang="scss" scoped>
.settings-main{
  overflow: hidden;
  .settings-wrapper{
    box-sizing: border-box;
    padding:8px 11px 0px 10px;
    width:354px;
    height:346px;
    background:rgba(255,255,255,1);
    border-radius:5px;
  }
}
</style>
