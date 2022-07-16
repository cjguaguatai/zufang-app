<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="$router.back()" />
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__content {
  background-color: #21b97a;

  .van-icon-arrow-left {
    font-size: 22px;
    color: #fff;
  }
  .van-nav-bar__title {
    font-size: 18px;
    color: #fff;
  }
}
</style>
