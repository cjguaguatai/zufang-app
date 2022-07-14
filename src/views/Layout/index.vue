<template>
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-fangzi"></i> <span class="text">首页</span></van-tabbar-item>
      <van-tabbar-item to="/findroom">
        <i slot="icon" class="iconfont icon-sousuo"></i> <span class="text">找房</span></van-tabbar-item>
      <van-tabbar-item to="/info">
        <i slot="icon" class="iconfont icon-zixun"></i> <span class="text">资讯</span></van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-gerenziliao"></i> <span class="text">我的</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-container{
    .iconfont{
        font-size: 20px;
    }
    .text{
        font-size: 10px;
    }
}
</style>
