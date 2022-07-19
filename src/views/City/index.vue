<template>
  <div>
    <greenHeader title="城市列表"></greenHeader>
    <van-index-bar :index-list="['#', '热', ...cityData[1]]">
      <!-- 当前城市 -->
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="this.$store.state.area.label" />
      <!-- 热门城市 -->
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="item in hotCityList"
        :key="item.value"
        @click="queryInfo(item.label)"
      />
      <!-- A-Z -->
      <div v-for="(item, index) in cityList" :key="index">
        <van-index-anchor :index="item[0]" />
        <van-cell
          :title="j.label"
          v-for="(j, index) in item[1]"
          :key="index"
          @click="queryInfo(j.label)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList, cityInfo } from '@/api/area'
import greenHeader from '@/components/greenHeader.vue'
export default {
  name: 'city',
  components: {
    greenHeader
  },
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  data () {
    return {
      allCityList: [],
      hotCityList: [],
      cityList: []
    }
  },
  methods: {
    // 获取所有城市列表
    async getCityList () {
      try {
        const { data } = await getCityList()
        // console.log(data)
        this.allCityList = data.body
        this.cityListFn()
      } catch (error) {
        console.log(error)
      }
    },
    // 获取热门城市列表
    async getHotCityList () {
      try {
        const { data } = await getHotCityList()
        // console.log(data)
        this.hotCityList = data.body
      } catch (error) {
        console.log(error)
      }
    },
    // 整理数据
    cityListFn () {
      const obj = this.cityData[0]
      const obj1 = this.cityData[1]
      const list = {}
      this.cityData[1].forEach((ele) => {
        list[ele] = []
      })
      // 将所有城市数据放入有序的key值为字母的对象
      for (const k in obj) {
        // console.log(obj[k])
        list[k] = obj[k]
      }
      // console.dir(list)
      const newList = []
      // 将对象转为数组
      for (const k in list) {
        newList.push(list[k]) // yong
      }
      // console.dir(newList)
      // 将大写字母进到数组，方便遍历
      for (let i = 0; i <= 18; i++) {
        this.cityList.push([obj1[i], newList[i]])
      }
      // console.dir(this.cityList)
    },
    // 查看城市名称是否有房源
    async queryInfo (name) {
      try {
        const res = await cityInfo(name)
        console.log(res)
        this.$store.commit('setArea', res.data.body)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    // 处理获取到的所有城市数据
    cityData () {
      //   console.log(111)
      const a = {}
      // 所有城市数据放入无序的key值为字幕的数组
      this.allCityList.forEach((item) => {
        // 拿到每个城市的首字母，再转换成大写
        const first = item.short.substr(0, 1).toUpperCase()
        // console.log(first)
        if (a[first]) {
          a[first].push(item)
        } else {
          a[first] = [item]
        }
      })
      // 将每个城市首字母按序排列
      const b = Object.keys(a).sort().join('').toUpperCase().split('')
      return [a, b]
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-index-bar__index {
  margin-top: 12px;
}
</style>
