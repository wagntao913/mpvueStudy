<template>
  <div class="test-main">
    test
    <van-button type="primary" @click="jump">按钮</van-button>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  methods: {
    jump () {
      // this.$router.push('/pages/index/main')
      get('https://www.baidu.com').then(res => {
        console.log('res')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.test-main{
  color: #0aa1ed;
  font-size: 20px;
}
</style>
