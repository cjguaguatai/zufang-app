<template>
  <div class="HouseItem_house">
    <div class="img">
      <img :src="`http://liufusong.top:8080${list.houseImg}`" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ list.title }}</div>
      <div class="desc">{{ list.desc }}</div>
      <div class="tags" v-for="(item, index) in list.tags" :key="index">
        {{ item }}
      </div>
      <div class="price">{{ list.price }} <span>元/月</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
  // created () {
  //   console.log(this.list)
  // }
}
</script>

<style lang="less" scoped>
* {
  margin: 0 0;
  padding: 0 0;
}
.HouseItem_house {
  height: 120px;
  padding-top: 18px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  img {
    width: 106px;
    height: 80px;
  }
  .info {
    padding-left: 12px;
    .title {
      font-weight: 700;
      font-size: 15px;
      // display: inline-block;
      white-space: nowrap;
      width: 256px;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
    }
    .desc {
      font-size: 12px;
      color: #afb2b3;
      padding: 3px 0;
    }
    .tags {
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
      color: #39becd;
      background: #e1f5f8;
    }
    .price {
      margin-top: 3px;
      font-size: 16px;
      color: #fa5741;
      font-weight: 700;
      span {
        font-weight: 300;
        font-size: 12px;
      }
    }
  }
}
</style>
