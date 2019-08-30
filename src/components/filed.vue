<template>
  <div class="filed-main">
    <!-- 左侧图标 -->
    <div :left-icon="leftIcon" v-if="leftIcon">
      <i :class="left_icon_classes"></i>
    </div>
    <!-- label标签 -->
    <div class="filed-label" :style="{width: labelWidth}" v-if="label">
      <i style="display: inline-block">{{ label }}</i>
      <!-- 必录标识 -->
      <i style="display: inline-block;color: #FA7921;" v-if="required">*</i>
    </div>
    <!-- 录入域 -->
    <input :style="{width: inputWidth, textAlign: inputAlign}" class="filed-input" :type="inputType" :placeholder="placeholder" @blur="onblur">
    <!-- <textarea v-if="inputType === 'textarea'" :placeholder="placeholder" :autoHeight="autoHeight" :maxlength="maxlength"></textarea> -->
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
      default: '20%'
    },
    inputWidth: {// 录入框宽度
      type: String,
      default: '80%'
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
    }
  },
  created () {
    console.log(this.label)
  },
  computed: {
    right_icon_classes() {
      return 'iconfont icon-' + this.rightIcon
    },
    left_icon_classes() {
      return 'iconfont icon-' + this.leftIcon
    }
  },
  methods: {
    // input失去焦点
    onblur() {
      console.log('==onblur==')
      // if(this.required)
    }
  }
}
</script>
<style lang="scss" scoped>
.filed-main{
  box-sizing: border-box;
  padding: 5px;
  background: #fff;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filed-label{
    text-align: center;
  }
  .filed-input{
    padding-right: 5px;
  }
}
</style>
