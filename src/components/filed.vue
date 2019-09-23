<template>
  <div class="filed-main">
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
    <div class="filed-label" :style="{width: labelWidth}" v-if="label">
      <i style="display: inline-block">{{ label }}</i>
      <!-- 必录标识 -->
      <i style="display: inline-block;color: #FA7921;" v-if="required">*</i>
    </div>
    <!-- 录入域 -->
    <input
      :style="{width: inputWidth, textAlign: inputAlign}"
      :data-inputName='keyWord'
      class="filed-input"
      v-model="inputValue"
      :disabled="disabled"
      :maxlength="limit"
      :password="password"
      :placeholder="placeholder"
      @blur="onblur"
      @input="onChange"
    />
    <!-- 右侧自定义 -->
    <div slot="extra"></div>
    <!-- 右侧图标 -->
    <div :left-icon="rightIcon" v-if="rightIcon">
      <i :class="right_icon_classes"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {// 标签名
      type: String,
      default: ''
    },
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {// 占位符内容
      type: String,
      default: ''
    },
    inputType: {// 录入框类型
      type: String,
      default: 'text'
    },
    labelWidth: {// 标签宽度
      type: String,
      default: '0'
    },
    inputWidth: {// 录入框宽度
      type: String,
      default: '100%'
    },
    inputAlign: {
      type: String,
      default: 'left'
    },
    autoHeight: {// textarea时，是否为自动高度
      type: Boolean,
      default: false
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
    required: {
      type: Boolean,
      default: false
    },
    keyWord: {
      type: String,
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
      if (newValue && !this.labelWidth) {
        this.labelWidth = '20%'
        this.inputWidth = '80%'
      } else if (newValue && this.labelWidth) {
        this.inputWidth = 1 - parseFloat(this.labelWidth)
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
.filed-main{
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
  .filed-label{
    text-align: center;
  }
  .filed-input{
    padding-right: 5px;
    height: 20px;
  }
}
</style>
