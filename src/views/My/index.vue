<template>
  <div class="my-container">
    <div>
      <img
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
        class="bgimg"
      />
      <div class="My_info">
        <div class="My_myIcon">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
            class="myheadimg"
          />
        </div>
        <div class="name">游客</div>
        <div class="myEdit"><button class="loginBtn">去登陆</button></div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false" class="myGrid">
      <van-grid-item text="我的收藏">
        <i slot="icon" class="iconfont icon-shoucang"></i>
      </van-grid-item>
      <van-grid-item text="我的出租">
        <i slot="icon" class="iconfont icon-fangzi"></i>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <i slot="icon" class="iconfont icon-lishijilu_o"></i>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <i slot="icon" class="iconfont icon-xinyongqia"></i>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <i slot="icon" class="iconfont icon-gerenziliao"></i>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <i slot="icon" class="iconfont icon-lianxiwomen"></i>
      </van-grid-item>
    </van-grid>
    <div class="myBanner">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Myindex'
}
</script>

<style lang="less" scoped>
.my-container {
  .bgimg {
    width: 100%;
  }
  .My_info {
    background-color: #fff;
    width: 319px;
    height: 165px;
    margin: 0 auto;
    box-shadow: 0 0 10px 3px #ddd;
    position: relative;
    transform: translateY(-35%);
    .My_myIcon {
      width: 60px;
      height: 60px;
      border: 5px solid #f5f5f5;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      position: relative;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      .myheadimg {
        width: 100%;
        // height: 60px;
        // margin : 5px;
        border-radius: 50%;
      }
    }
    .name {
      width: 279px;
      height: 15px;
      font-size: 14px;
      text-align: center;
      margin: 0 auto;
      margin-top: -10px;
    }
    .myEdit {
      width: 279px;
      height: 33px;
      margin: 0 auto;
    }
    .loginBtn {
      background-color: #21b97a;
      border: 1px solid rgba(0, 0, 0, 0);
      font-size: 13px;
      height: 30px;
      // text-align: center;
      display: block;
      margin: 20px auto 0;
      width: 70px;
      color: #fff;
      border-radius: 5px;
    }
  }

  // background-color: pink;
  .myGrid {
    margin-top: -35px;
    border: 1px solid rgba(0, 0, 0, 0);
    .iconfont {
      font-size: 28px;
    }
  }
  .myBanner{
    margin: 0 10px;
    img {
      width: 100%;
    }
  }
}
</style>
