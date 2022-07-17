<template>
  <div>
    <greenHeader title="我的收藏" />
    <favoriteItem v-for="(item, index) in info" :key="index" :list="item" />
  </div>
</template>

<script>
import greenHeader from '@/components/greenHeader.vue'
import favoriteItem from '@/views/Favorate/favoriteItem.vue'
import { getFavorite, getRoomList } from '@/api/user'
export default {
  name: 'Favorate',
  data () {
    return {
      info: ''
    }
  },
  components: {
    greenHeader,
    favoriteItem
  },
  created () {
    this.getFavoriteFn()
    this.getRoomListFn()
  },
  methods: {
    // 获取收藏列表
    async getFavoriteFn () {
      try {
        const res = await getFavorite()
        // console.log(res)
        this.info = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    // 获取已发布房源列表
    async getRoomListFn () {
      try {
        await getRoomList()
        // console.log(res)
        // this.info = data.body
      } catch (e) {
        console.log(e)
      }
    }

  }
}
</script>

<style></style>
