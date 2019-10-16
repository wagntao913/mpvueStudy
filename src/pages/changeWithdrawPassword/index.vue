<template>
  <div class="change-password-main">
    <div class="change-password-wrapper">
      <field
        labelWidth="30%"
        type="password"
        label="手机号"
        placeholder="请输入手机号"
        keyWord="phone"
        @onChange="onChange"
      ></field>
      <field
        showButton
        labelWidth="30%"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        keyWord="verificationCode"
        buttonText="发送验证码"
        buttonWidth="100%"
        @onButtonClick="getCode"
        @onChange="onChange"
      ></field>
      <field
        labelWidth="30%"
        type="password"
        label="提现密码"
        placeholder="请输入提现密码"
        password
        keyWord="withdrawPassword"
        @onChange="onChange"
      ></field>
      <div class="tips">提现密码为纯数字</div>
      <div class="change-password-btn">
        <van-button round @click="resetPassword">确认修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import field from '../../components/field.vue'
import { sendCode, withdrawPassword } from '../../api/index'
import { showToast, getStorageSync } from '../../api/wechat'

export default {
  components: {
    field
  },
  data() {
    return {
      phone: '',
      verificationCode: '',
      newPassword: ''
    }
  },
  methods: {
    onChange(keyword, value) {
      // console.log(keyword, value)
      this[keyword] = value
    },
    getCode() {
      if (!this.phone) {
        showToast('请输入手机号!')
        return false
      } else if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
        showToast('请输入正确的手机号!')
        return false
      } else {
        sendCode(this.phone).then(res => {
          console.log(res)
        })
      }
    },
    resetPassword() {
      console.log('==resetPassword==')
      if (!this.phone) {
        showToast('请输入手机号!')
        return false
      } else if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
        showToast('手机号不合法，请重新输入')
        return false
      } else if (!this.verificationCode) {
        showToast('请输入验证码！')
        return false
      } else if (!this.withdrawPassword) {
        showToast('请输入提现密码！')
        return false
      }
      let openId = getStorageSync('openId')
      let providerId = getStorageSync('providerId')
      // phone, verificationCode, withdrawPassword, providerId, openId
      let params = {
        phone: this.phone,
        verificationCode: this.verificationCode,
        withdrawPassword: this.withdrawPassword,
        providerId: providerId,
        openId: openId
      }
      withdrawPassword(params).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.change-password-main{
  overflow: hidden;
  padding:8px 8px 0px 8px;
  .change-password-wrapper{
    box-sizing: border-box;
    border-radius: 10px;
    width:354px;
    background:rgba(255,255,255,1);
    padding-bottom: 10px;
    border-radius:5px;
    .tips{
      color:#888888;
      font-size: 12px;
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
