<template>
  <div>
    <span class="name">hello world</span>
    <van-button type="primary" @click="jump">路由</van-button><br />
    <van-button type="primary" @click="handleGet">异步请求</van-button>
  </div>
</template>

<script>
  import { get } from '@/utils/request'
  export default {
    methods: {
      jump() {
        this.$router.push('/pages/index/main')
      },
      handleGet() {
        get('http://www.baidu.com').then(res => {
          console.log('handleResponse....')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .name {
    color: red;
    font-weight: bold;
  }
</style>
