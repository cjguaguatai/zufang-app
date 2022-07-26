<template>
  <div>
    <greenHeader title="发布房源"></greenHeader>
    <div class="rent-list">
      <van-cell title="房源信息" class="top" />
      <van-form>
        <!-- 小区名称 -->
        <van-cell
          :value="community"
          is-link
          title="小区名称"
          @click="$router.push('/rent/search')"
        />
        <!-- 租金 -->
        <van-field v-model="price" label="租金" placeholder="请输入租金/月">
          <span slot="right-icon">￥/月</span>
        </van-field>
        <!-- 建筑面积 -->
        <van-field v-model="size" label="建筑面积" placeholder="请输入建筑面积">
          <span slot="right-icon">m²</span>
        </van-field>
        <!-- 户型 -->
        <div class="popup">
          <!-- 输入框 -->
          <van-field
            readonly
            clickable
            label="户型"
            :value="room.roomType"
            placeholder="请选择"
            @click="room.roomTypeShow = true"
            right-icon="arrow"
          />
          <!-- 弹框 -->
          <van-popup v-model="room.roomTypeShow" round position="bottom">
            <van-picker
              show-toolbar
              :columns="room.columns"
              @cancel="room.roomTypeShow = false"
              @confirm="onConfirmRoom"
            />
          </van-popup>
        </div>
        <!-- 所在楼层 -->
        <div class="popup">
          <!-- 输入框 -->
          <van-field
            readonly
            clickable
            label="所在楼层"
            :value="floor.floorType"
            placeholder="请选择"
            @click="floor.floorTypeShow = true"
            right-icon="arrow"
          />
          <!-- 弹框 -->
          <van-popup v-model="floor.floorTypeShow" round position="bottom">
            <van-picker
              show-toolbar
              :columns="floor.columns"
              @cancel="floor.floorTypeShow = false"
              @confirm="onConfirmFloor"
            />
          </van-popup>
        </div>
        <!-- 朝向 -->
        <div class="popup">
          <!-- 输入框 -->
          <van-field
            readonly
            clickable
            label="朝向"
            :value="oriented.orientedType"
            placeholder="请选择"
            @click="oriented.orientedTypeShow = true"
            right-icon="arrow"
          />
          <!-- 弹框 -->
          <van-popup
            v-model="oriented.orientedTypeShow"
            round
            position="bottom"
          >
            <van-picker
              show-toolbar
              :columns="oriented.columns"
              @cancel="oriented.orientedTypeShow = false"
              @confirm="onConfirmOriented"
            />
          </van-popup>
        </div>
        <!-- 房屋标题 -->
        <div class="homeTitle">
          <van-cell title="房屋标题" />
          <van-field
            v-model="message"
            rows="1"
            autosize
            type="textarea"
            placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
            class="text"
          />
        </div>
        <!-- 房屋图像 -->
        <div class="homeTitle">
          <van-cell title="房屋图像" />
          <van-uploader
            :after-read="afterRead"
            class="img"
            multiple
            v-model="fileList"
          />
        </div>
        <!-- 房屋配置 -->
        <div class="configure">
          <van-cell title="房屋配置" />
          <van-grid :column-num="5">
            <van-grid-item
              v-for="item in furniture"
              :key="item.id"
              :text="item.furnitureList"
              @click="changeFn(item)"
              :class="{ click: item.isActive ? true : false }"
            >
              <i slot="icon" :class="`iconfont ${item.iconList}`"></i>
            </van-grid-item>
          </van-grid>
        </div>
        <div class="hui"></div>
        <!-- 房屋描述 -->
        <div class="homeDesc">
          <van-cell title="房屋描述" />
          <van-field
            v-model="homeDescMessage"
            autosize
            type="textarea"
            placeholder="请输入房屋描述信息"
            class="text"
          />
        </div>
        <div class="hui1"></div>
        <div class="footer">
          <div class="cancel button" @click="cancelFn">取消</div>
          <div class="confirm button" @click="confirmFn">提交</div>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import greenHeader from '@/components/greenHeader.vue'
import { releaseHomeCondition } from '@/api/house'
import { sendHouse } from '@/api/user'
import { sendPhoto } from '@/api/plugin'
export default {
  name: 'toRent',
  components: {
    greenHeader
  },
  data () {
    return {
      price: '',
      size: '',
      community: this.$store.state.community.communityName,
      num: '',
      // 条件列表
      conditionList: [],
      // 户型
      room: {
        roomType: '',
        roomTypeShow: false,
        columns: ['一室', '二室', '三室', '四室', '四室+']
      },
      // 楼层
      floor: {
        floorType: '',
        floorTypeShow: false,
        columns: ['高楼层', '中楼层', '低楼层']
      },
      // 朝向
      oriented: {
        orientedType: '',
        orientedTypeShow: false,
        columns: ['东', '西', '南', '北', '东南', '东北', '西南', '西北']
      },
      message: '', // 房屋标题
      img: '', // 房屋照片
      // 房屋配置
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
      homeDescMessage: '', // 房屋描述
      list: {}, // 提交数据
      fileList: [], // 图片预览数组
      sendPhotoList: [] // 提交的图片数组
    }
  },
  created () {
    this.releaseHomeConditionFn()
  },
  methods: {
    // 发布房屋所需的条件
    async releaseHomeConditionFn () {
      try {
        const { data } = await releaseHomeCondition()
        // console.log(data)
        this.conditionList = data.body
      } catch (error) {
        console.log(error)
      }
    },
    // 户型
    onConfirmRoom (value) {
      this.room.roomType = value
      this.room.roomTypeShow = false
    },
    // 所在楼层
    onConfirmFloor (value) {
      this.floor.floorType = value
      this.floor.floorTypeShow = false
    },
    // 朝向
    onConfirmOriented (value) {
      this.oriented.orientedType = value
      this.oriented.orientedTypeShow = false
    },
    // 点击配置图标
    changeFn (item) {
      item.isActive = !item.isActive
    },
    // 点击取消按钮
    cancelFn () {
      this.$dialog
        .confirm({
          confirmButtonText: '继续编辑',
          cancelButtonText: '放弃',
          title: '提示',
          confirmButtonColor: '#108ee9',
          message: '放弃发布房源'
        })
        .catch(() => {
          this.$router.push('/home')
        })
    },
    // 转换value提交
    changeValue (info, text) {
      let str = ''
      let arr = []
      const obj = this.conditionList
      // console.log(info)
      for (const k in obj) {
        // console.log(k)
        if (k === info) {
          // console.log(111)
          arr = obj[k]
        }
      }
      // console.log(arr)
      arr = arr.filter((ele) => ele.label === text)
      str = arr[0].value
      // this.conditionList.type.forEach((element) => {})
      console.log(str)
      return str
    },
    // 处理家具数据
    handleFurnitureData () {
      let arr = []
      let arr1 = []
      arr1 = this.furniture.filter((ele) => ele.isActive === true)
      arr1.forEach((ele) => {
        arr.push(ele.furnitureList)
      })
      arr = arr.join('|')
      return arr
    },
    // 点击提交按钮
    async confirmFn () {
      if (
        this.message.trim() !== '' &&
        this.homeDescMessage.trim() !== '' &&
        this.oriented.orientedType.trim() !== '' &&
        this.price.trim() !== '' &&
        this.room.roomType.trim() !== '' &&
        this.size.trim() !== '' &&
        this.floor.floorType.trim() !== '' &&
        this.community.trim() !== ''
      ) {
        this.list = {
          title: this.message,
          description: this.homeDescMessage,
          houseImg: this.sendPhotoList.join('|'),
          oriented: this.changeValue('oriented', this.oriented.orientedType),
          supporting: this.handleFurnitureData(),
          price: this.price,
          roomType: this.changeValue('roomType', this.room.roomType),
          size: this.size,
          floor: this.changeValue('floor', this.floor.floorType),
          community: this.$store.state.community.community
        }
        const { data } = await sendHouse(this.list)
        console.log(data)
        this.$toast.success('提交成功')
      } else {
        this.$toast.fail('请把表格填完整再提交')
      }
    },
    // 上传图片
    async afterRead (file) {
      console.log(file)
      try {
        const { data } = await sendPhoto(file.file)
        // console.log(data)
        data.body.forEach((ele) => {
          this.sendPhotoList.push(ele)
        })
        // this.fileList.push()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.rent-list {
  .van-cell {
    padding: 15px;
    height: 50px;
  }
  .top {
    // padding: 15px 15px 9px;
    color: #21b97a;
    background-color: #fff;
    font-size: 15px;
  }
  .van-form {
    .van-cell__title {
      color: #666;
      font-size: 14px;
    }
    /deep/.van-field__label {
      margin-right: -5px;
    }
  }
  // 弹出框中确认取消的样式
  /deep/.van-picker__confirm,
  /deep/.van-picker__cancel {
    color: #108ee9;
    font-size: 17px;
    padding: 9px 15px;
    height: 42px;
  }
  .popup {
    /deep/.van-field__control {
      text-align: right;
    }
    /deep/.van-field__control::-webkit-input-placeholder {
      color: #666;
    }
  }
  .homeTitle {
    .van-cell__title {
      background-color: #fff;
      font-size: 14px;
      color: #333;
    }
    .van-cell {
      padding: 15px 15px 9px;
    }
    .text,
    .img {
      padding: 0 15px 0 15px;
      // height: 44px;
      // line-height: 44px;
    }
  }
  .configure {
    .van-cell {
      padding: 15px 15px 9px;
    }
    /deep/.iconfont {
      font-size: 24px;
      color: #333;
    }

    .click {
      /deep/.iconfont {
        color: #21b97a !important;
      }
      /deep/.van-grid-item__text {
        color: #21b97a !important;
      }
    }
  }
  .hui {
    background-color: #f5f5f9;
    height: 20px;
  }
  .homeDesc {
    .van-cell {
      padding: 15px 15px 9px;
    }
    .van-cell,
    .van-field {
      height: 100%;
    }
  }
  .hui1 {
    background-color: #f5f5f9;
    height: 65px;
    // margin-bottom: 45px;
  }
  .footer {
    z-index: 999;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    .button {
      width: 187px;
      // min-width: 10px;
      color: #21b97a;
      background-color: #fff;
      height: 100%;
      line-height: 45px;
      flex: 1;
      text-align: center;
      font-size: 15px;
    }
    .confirm {
      color: #fff;
      background-color: #21b97a;
    }
  }
}
</style>
