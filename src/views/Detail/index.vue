<template>
  <div class="Detail-container">
    <greenHeader :title="info.community" />
    <div class="main">
      <div class="swipers">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in info.houseImg" :key="index">
            <img :src="`http://liufusong.top:8080${item}`" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="houseInfo">
        <h3>{{ info.title }}</h3>
        <div class="button" v-for="(item, index) in info.tags" :key="index">
          {{ item }}
        </div>
        <div class="specs">
          <div class="box">
            <div class="top">
              {{ info.price }}
              <span>/月</span>
            </div>
            <div class="bottom">租金</div>
          </div>
          <div class="box">
            <div class="top">
              {{ info.roomType }}
            </div>
            <div class="bottom">房型</div>
          </div>
          <div class="box">
            <div class="top">{{ info.size }}平米</div>
            <div class="bottom">面积</div>
          </div>
        </div>
        <div class="houseInfoFooter">
          <div class="left">
            <div>装修： <span>精装</span></div>
            <div class="top">
              楼层： <span>{{ info.floor }}</span>
            </div>
          </div>
          <div class="right">
            <div>
              朝向： <span>{{ info && info.oriented[0] }}</span>
            </div>
            <div class="top">类型： <span>普通住宅</span></div>
          </div>
        </div>
      </div>
      <!-- 灰色过度 -->
      <div class="hui"></div>
      <!-- 地图区域 -->
      <div class="map">
        <div class="title">小区：xxx</div>
        <div class="img"></div>
      </div>
      <!-- 房屋信息 -->
      <div class="houseDetail">
        <!-- 房屋配套 -->
        <div class="title">房屋配套</div>
        <div class="icon">
          <div v-for="item in showIconList" :key="item.id" class="box">
            <i :class="`iconfont ${item.iconList}`"></i>
            <div>{{ item.furnitureList }}</div>
          </div>
        </div>
        <div class="hui"></div>
        <!-- 房源概况 -->
        <div class="title">房屋概括</div>
        <div>
          <div class="userInfo">
            <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
            <div class="middle">
              <div>王女士</div>
              <div class="text">
                <i class="iconfont icon-xinyongqia"></i>
                <span>已认证房主</span>
              </div>
            </div>
          </div>
          <div class="text">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
      </div>
    </div>

    <!-- 底部粘性布局 -->
    <footer>
      <div class="left box" @click="changeFavorite">
        <img
          v-if="isFavorite"
          src="http://liufusong.top:8080/img/star.png"
          alt=""
        />
        <img v-else src="http://liufusong.top:8080/img/unstar.png" alt="" />
        <span>收藏</span>
      </div>
      <div class="middle box">在线咨询</div>
      <div class="right box">电话咨询</div>
    </footer>
  </div>
</template>

<script>
import greenHeader from '@/components/greenHeader.vue'
import { getHouse } from '@/api/house'
import { getFavoriteShow, addFavorite, removeFavorite } from '@/api/user'
export default {
  name: 'Datail',
  components: {
    greenHeader
  },
  data () {
    return {
      list: '',
      info: '',
      furniture: [
        {
          iconList: 'icon-yigui',
          furnitureList: '衣柜',
          id: 1,
          isActive: false
        },
        {
          iconList: 'icon-xiyiji',
          furnitureList: '洗衣机',
          id: 2,
          isActive: false
        },
        {
          iconList: 'icon-kongtiao',
          furnitureList: '空调',
          id: 3,
          isActive: false
        },
        {
          iconList: 'icon-meiqi',
          furnitureList: '天然气',
          id: 4,
          isActive: false
        },
        {
          iconList: 'icon-bingxiang',
          furnitureList: '冰箱',
          id: 5,
          isActive: false
        },
        {
          iconList: 'icon-nuanqi',
          furnitureList: '暖气',
          id: 6,
          isActive: false
        },
        {
          iconList: 'icon-dianshiji',
          furnitureList: '电视',
          id: 7,
          isActive: false
        },
        {
          iconList: 'icon-reshuiqi',
          furnitureList: '热水器',
          id: 8,
          isActive: false
        },
        {
          iconList: 'icon-kuandai',
          furnitureList: '宽带',
          id: 9,
          isActive: false
        },
        {
          iconList: 'icon-shafa',
          furnitureList: '沙发',
          id: 10,
          isActive: false
        }
      ],
      isFavorite: ''
    }
  },
  created () {
    // console.log(this.$route.params.id)
    this.getInfo()
    this.getFavoriteShow()
  },
  methods: {
    // 获取该房屋信息
    async getInfo () {
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        const { data } = await getHouse(this.$store.state.id)
        this.info = data.body
        // console.log(data)
      } catch (e) {
        if (e.message === 'timeout of 3000ms exceeded') {
          this.$toast.fail('请求超时，请重试')
        }
        console.log(e)
      }
    },
    // 查看该房屋信息是否被收藏
    async getFavoriteShow () {
      try {
        const { data } = await getFavoriteShow(this.$store.state.id)
        // console.log(res)
        this.isFavorite = data.body.isFavorite
      } catch (error) {
        console.log(error)
      }
    },
    // 点击收藏，添加或删除
    async changeFavorite () {
      if (this.isFavorite) {
        try {
          const res = await removeFavorite(this.$store.state.id)
          console.log(res)
          this.isFavorite = !this.isFavorite
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          const res = await addFavorite(this.$store.state.id)
          console.log(res)
          this.isFavorite = !this.isFavorite
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  computed: {
    // 拿到icon图标
    showIconList () {
      const a = []
      if (this.info.supporting) {
        const list = this.info.supporting.join('')
        // console.log(typeof data) item.furnitureList.includes()
        this.furniture.forEach((item) => {
          if (list.includes(item.furnitureList)) {
            a.push(item)
          }
        })
      }
      return a
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0 0;
  padding: 0 0;
}
.main {
  // height: 100%;
  margin-bottom: 50px;
  // overflow: hidden;
}
.swipers {
  .my-swipe {
    img {
      width: 100%;
      height: 252px;
    }
  }
  /deep/.van-swipe-item {
    height: 252px;
  }
}
.houseInfo {
  width: 100%;
  height: 266px;
  // background-color: pink;
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    padding: 25px 0 0 10px;
  }
  .button {
    color: #39becd;
    background: #e1f5f8;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
    line-height: 12px;
    margin: 15px 10px;
  }
  .specs {
    display: flex;
    justify-content: space-around;
    .box {
      text-align: center;
      flex: 1;
      border-top: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      padding: 15px 0;
      margin-bottom: 15px;
      .top {
        color: #fa5741;
        font-size: 18px;
        font-weight: bolder;
        span {
          font-size: 12px;
          font-weight: 400;
        }
      }
      .bottom {
        margin-top: 5px;
        height: 26px;
        line-height: 26px;
        color: #999;
        font-size: 14px;
      }
    }
  }
  .houseInfoFooter {
    padding: 0 15px;
    display: flex;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
    // justify-content: space-between;
    div {
      color: #999;
      font-size: 13px;
      span {
        color: #333;
        font-size: 14px;
      }
    }
    .top {
      margin-top: 10px;
    }
  }
}
.hui {
  width: 100%;
  height: 17px;
  background-color: #f6f6f6;
}
.map {
  .title {
    padding-left: 15px;
    font-size: 14px;
    color: #666;
    margin: 12px 0;
  }
  .img {
    height: 145px;
    background-color: pink;
  }
}
.houseDetail {
  // margin-bottom: 50px;

  // height: 200px;
  .title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 15px;
    border-bottom: 1px solid #cecece;
  }
  .icon {
    display: flex;
    padding: 0 10px;
    .box {
      // flex: 1;
      width: 71px;
      height: 50px;
      text-align: center;
      .iconfont {
        font-size: 23px;
        color: #333;
      }
      div {
        font-size: 14px;
      }
    }
  }
  .userInfo {
    display: flex;
    margin: 10px 10px 0 15px;
    img {
      width: 52px;
      height: 52px;
      margin-right: 10px;
    }
    .middle {
      display: flex;
      color: #333;
      font-size: 14px;
      flex-direction: column;
      // align-items: center;
      padding-left: 5px;
      justify-content: center;
      .text {
        font-size: 12px;
        color: #fa5741;
      }
    }
  }
}
//底部固定栏
footer {
  background-color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  display: flex;
  font-size: 17px;
  // align-items: center;
  line-height: 50px;
  color: #999;
  .box {
    flex: 1;
    text-align: center;
    height: 50px;
    // align-items: center;
  }
  .left {
    img {
      margin-right: 5px;
      width: 16px;
      height: 16px;
    }
  }
  .right {
    border-right: 1px solid #e8e8e9;
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
