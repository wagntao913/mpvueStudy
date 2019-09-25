<template>
  <div class="change-password-main">
    <div class="change-password-wrapper">
      <field label-width="40%" password label="请输入原始密码" placeholder="请输入原始密码"></field>
      <field label-width="40%" password label="请设置新密码" placeholder="请输入新密码"></field>
      <field label-width="40%" password label="确认新密码" placeholder="请再次确认新密码"></field>
      <div class="tips">密码必须是6-20个英文字母、数字或符号（除空格），且字母、数字和标点 符号至少包含两种。</div>
      <div class="change-password-btn">
        <van-button round>确认修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import field from '../../components/field.vue'
export default {
  components: {
    field
  }
}
</script>

<style lang="scss" scoped>
.change-password-main{
  overflow: hidden;
  padding:8px 11px 0px 10px;
  .change-password-wrapper{
    box-sizing: border-box;
    border-radius: 10px;
    width:354px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    .tips{
      color:#888888;
      font-size: 11px;
      margin:9px 15px 0px 15px;
    }
    .change-password-btn{
      text-align: center;
      margin-top: 24px;
      /deep/ .van-button--default{
        background-color: #D00000;
        color: #fff;
        width: 130px;
      }
    }
  }
}
</style>
