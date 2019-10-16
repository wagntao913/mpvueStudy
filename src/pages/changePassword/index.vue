<template>
  <div class="change-password-main">
    <div class="change-password-wrapper">
      <field
        label-width="40%"
        password
        label="请输入原始密码"
        placeholder="请输入原始密码"
        keyWord="password"
        @onChange="onChange"
      ></field>
      <field
        label-width="40%"
        password
        label="请设置新密码"
        placeholder="请输入新密码"
        keyWord="newPassword"
        @onChange="onChange"
      ></field>
      <field
        label-width="40%"
        password
        label="确认新密码"
        placeholder="请再次确认新密码"
        keyWord="newPassword2"
        @onChange="onChange"
        @onBlur="comparePassword"
      ></field>
      <div class="tips">密码必须是6-20个英文字母、数字或符号（除空格），且字母、数字和标点 符号至少包含两种。</div>
      <div class="change-password-btn">
        <van-button round @click="resetPassword">确认修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import field from '../../components/field.vue'
import { userResetPwd } from '../../api/index'
import { showToast, getStorageSync } from '../../api/wechat'

export default {
  components: {
    field
  },
  data() {
    return {
      password: '',
      newPassword: '',
      newPassword2: ''
    }
  },
  methods: {
    onChange(keyword, value) {
      // console.log(keyword, value)
      this[keyword] = value
    },
    comparePassword() {
      debugger
      if (this.newPassword2 !== this.newPassword) {
        showToast('设置新密码两次不一致，请重新设置！')
        return false
      }
    },
    //  password, newPassword, providerId, openId
    resetPassword() {
      console.log('==resetPassword==')
      console.log('==newPassword==', this.newPassword)
      console.log('==resetPassword==', this.newPassword2)
      if (!this.password) {
        showToast('请输入原始密码!')
        return false
      } else if (!this.newPassword) {
        showToast('请输入原始密码!')
        return false
      } else if (!this.newPassword2) {
        showToast('请再次输入原始密码!')
        return false
      } else if (this.newPassword2 !== this.newPassword) {
        showToast('设置新密码两次不一致，请重新设置！')
        return false
      }
      let openId = getStorageSync('openId')
      let providerId = getStorageSync('providerId')
      // phone, verificationCode, withdrawPassword, providerId, openId
      let params = {
        password: this.password,
        newPassword: this.newPassword,
        providerId: providerId,
        openId: openId
      }
      userResetPwd(params).then((res) => {
        console.log(res)
      })
    }
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
