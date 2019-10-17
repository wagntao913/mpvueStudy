<template>
  <div class="field-main">
    <!-- 左侧图标 -->
    <div v-if="leftIcon">
      <van-icon
        class="search"
        :name="leftIcon"
        size="18px"
        color="#858C96"
      ></van-icon>
    </div>
    <!-- label标签 -->
    <div class="field-label" :style="{width: labelWidth}" v-if="label">
      <i style="display: inline-block">{{ label }}</i>
      <!-- 必录标识 -->
      <i style="display: inline-block;color: #FA7921;" v-if="required">*</i>
    </div>
    <!-- 录入域 -->
    <input
      v-if="!textarea"
      :style="{width: inputWidth, textAlign: inputAlign}"
      :data-inputName='keyWord'
      class="field-input"
      v-model="inputValue"
      :disabled="disabled"
      :maxlength="limit"
      :password="password"
      :placeholder="placeholder"
      @blur="onblur"
      @input="onChange"
    />
    <!-- 多行录入域 -->
    <textarea
      v-if= "textarea"
      :style="{width: inputWidth, textAlign: inputAlign}"
      :data-inputName='keyWord'
      class="field-input"
      v-model="inputValue"
      :disabled="disabled"
      auto-height
      :password="password"
      :placeholder="placeholder"
      @blur="onblur"
      @input="onChange"
    ></textarea>
    <!-- 右侧按钮 -->
    <div v-if="showButton" class="right-extra" :style="{width: buttonWidth}">
      <van-button square type="default" @click="onClick">{{ buttonText }}</van-button>
    </div>
    <!-- 右侧头像 -->
    <div  v-if="showAvatar" class="right-extra" style="width: 10% " @click="onAvatarClick">
      <image-view :src="avatarUrl" round width="30px"></image-view>
    </div>
    <!-- 右侧单位 -->
    <div v-if="rightUnit" class="right-extra">
      <span>{{ rightUnit }}</span>
    </div>
    <!-- 右侧图标 -->
    <div v-if="rightIcon" @click="onIconClick">
      <van-icon
        class="search"
        :name="rightIcon"
        :size="size"
        :color="color"
      ></van-icon>
    </div>
  </div>
</template>
<script>
import imageView from './base/imageView.vue'

export default {
  components: {
    imageView
  },
  props: {
    label: {// 标签名
      type: String,
      default: ''
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    limit: { // 最大输入长度
      type: Number,
      default: 50
    },
    password: { // 是否为密码输入样式
      type: Boolean,
      default: false
    },
    placeholder: {// 占位符内容
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '18px'
    },
    color: {
      type: String,
      default: '#858C96'
    },
    inputType: {// 录入框类型
      type: String,
      default: 'text'
    },
    labelWidth: {// 标签宽度
      type: String,
      default: ''
    },
    inputWidth: {// 录入框宽度
      type: String,
      default: '100%'
    },
    inputAlign: { // 对齐方式
      type: String,
      default: 'left'
    },
    maxlength: {// 输入的最大长度
      type: String,
      default: '50'
    },
    leftIcon: {// 左侧图标
      type: String,
      default: ''
    },
    rightIcon: {// 右侧图标
      type: String,
      default: ''
    },
    required: { // 是否必填
      type: Boolean,
      default: false
    },
    keyWord: { // 绑定字段，为了进行双向数据绑定
      type: String,
      default: ''
    },
    buttonWidth: { // 按钮宽度
      type: String,
      default: '0'
    },
    showButton: { // 右侧展示按钮
      type: Boolean,
      default: false
    },
    buttonText: { // 按钮文本
      type: String,
      default: ''
    },
    rightUnit: { // 右侧单位
      type: String,
      default: false
    },
    showAvatar: { // 右侧展示头像
      type: Boolean,
      default: false
    },
    avatarUrl: { // 图片地址，默认取购马图标
      type: String,
      default: 'https://gouma-jingxuan.oss-cn-hangzhou.aliyuncs.com/product/a9ae31ad-5961-493e-8f32-47db51ce1d45__20190725144735.jpg'
    },
    textarea: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  created () {
    // console.log(this.label)
  },
  computed: {
    right_icon_classes() {
      return 'iconfont icon-' + this.rightIcon
    },
    left_icon_classes() {
      return 'iconfont icon-' + this.leftIcon
    }
  },
  watch: {
    label(newValue, oldValue) {
      if (newValue && this.labelWidth !== '0') {
        this.labelWidth = '20%'
        this.inputWidth = '80%'
      } else if (newValue && this.labelWidth) {
        this.inputWidth = 1 - parseFloat(this.labelWidth)
      }
    },
    buttonWidth(newVal, oldVal) {
      if (newVal && this.labelWidth !== '0') {
        this.inputWidth = 1 - parseFloat(this.labelWidth) - parseFloat(newVal)
      } else if (newVal && this.labelWidth === '0') {
        this.inputWidth = 1 - parseFloat(newVal)
      }
    }
  },
  methods: {
    // input失去焦点
    onblur() {
      this.$emit('onblur')
    },
    // input 输入监听
    onChange(e) {
      let inputName = e.mp.currentTarget.dataset.inputname
      const { value } = e.mp.detail
      this.$emit('onChange', inputName, value)
    },
    // 右侧按钮点击事件
    onClick() {
      console.log('== click ==')
      this.$emit('onButtonClick')
    },
    onIconClick() {
      console.log('== click ==')
      this.$emit('onIconClick')
    },
    onAvatarClick() {
      console.log('== click ==')
      this.$emit('onAvatarClick')
    },
    setValue(v) {
      this.inputValue = v
    },
    getValue() {
      return this.inputValue
    }
  }
}
</script>
<style lang="scss" scoped>
.field-main{
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E5E5;
  .search{
    display: flex;
    align-items: center;
    height: 100%;
    margin-right:5px;
  }
  .field-label{
    text-align: left;
    margin-left: 5px;
    flex-shrink: 0;
  }
  .field-input{
    padding: 0 5px;
    height: 20px;
  }
  .right-extra{

  }
}
</style>
