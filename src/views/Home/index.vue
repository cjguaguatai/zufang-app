<template>
  <div>
    <!-- 轮播图 -->
    <div class="swipers">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgSrc" :key="item.id"
          ><img :src="`http://liufusong.top:8080${item.imgSrc}`" alt=""
        /></van-swipe-item>
      </van-swipe>
      <van-search class="search" v-model="value" placeholder="请输入小区或地址">
        <span slot="label" class="text"
          >上海<i class="iconfont icon-xiajiantou"></i
        ></span>
      </van-search>
      <i class="iconfont icon-ditu"></i>
    </div>
    <!-- 出租导航 -->
    <div class="nav">
      <van-grid :border="false" :clickable="true">
        <van-grid-item text="整租">
          <i slot="icon" class="iconfont icon-fangzi"></i>
        </van-grid-item>
        <van-grid-item text="合租">
          <i slot="icon" class="iconfont icon-hezuohuoban"></i>
        </van-grid-item>
        <van-grid-item text="地图找房">
          <i slot="icon" class="iconfont icon-ditu"></i>
        </van-grid-item>
        <van-grid-item text="去出租">
          <i slot="icon" class="iconfont icon-fangzi"></i>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 租房小组 -->
    <div class="group">
      <div class="head">
        <div class="left">租房小组</div>
        <div class="right">更多</div>
      </div>
      <van-row type="flex" justify="space-around">
        <van-col span="11"><div class="group-box"></div></van-col>
        <van-col span="11"><div class="group-box"></div></van-col>
        <van-col span="11"><div class="group-box"></div></van-col>
        <van-col span="11"><div class="group-box"></div></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getSwiper } from '@/api/home'
export default {
  name: 'HomeIndex',
  data () {
    return {
      imgSrc: '',
      value: ''
    }
  },
  created () {
    this.getSwiperFn()
  },
  methods: {
    async getSwiperFn () {
      const { data } = await getSwiper()
      console.log(data.body)
      this.imgSrc = data.body
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
/deep/.my-swipe .van-swipe__track {
  height: 212px;
}
.swipers {
  position: relative;
  img {
    width: 100%;
  }
  .search {
    position: absolute;
    top: 0;
    left: 7%;
    padding: 0;
    margin-top: 15px;
    // transform: translateX(-50%);
    width: 300px;
    .van-search__content {
      padding-left: 5px;
    }
    /deep/.van-field__left-icon {
      border-left: 1px solid #e5e5e5;
      padding-left: 8px;
    }
    .text {
      color: #333;
      font-size: 14px;
      .iconfont {
        font-size: 12px;
        color: #ccc;
        padding-left: 4px;
      }
    }
  }
  .icon-ditu {
    position: absolute;
    top: 20px;
    right: 16px;
    font-size: 25px;
    color: #fff;
  }
}
.nav {
  height: 122px;
  /deep/.van-grid-item {
    height: 122px;
    // border: 0px solid rgba(0, 0, 0, 0);
    .iconfont {
      // margin-top: -100px;
      color: #00ae66;
      font-size: 35px;
    }
    .van-grid-item__text {
      font-size: 14px;
      margin-top: 15px;
    }
  }
}
.group {
  background-color: #f6f5f6;
  height: 188px;
  .head {
    // width: 100%;
    height: 30px;
    // background-color: pink;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #787d82;
    align-items: center;
    // margin-left: 15px;
    // margin-right: 10px;
    margin: 0 10px 10px 15px;
    padding-top: 7px;
    .left {
      font-size: 15px;
      font-weight: 700;
      color: #333;
    }
  }
  .group-box {
    // width: 172px;
    height: 60px;
    background-color: pink;
    margin-bottom: 10px;
  }
}
</style>
