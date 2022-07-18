<template>
  <div>
    <greenHeader title="房屋管理"></greenHeader>
    <favoriteItem v-for="(item, index) in info" :key="index" :list="item" />
  </div>
</template>

<script>
import { getRoomList } from '@/api/user'

import greenHeader from '@/components/greenHeader.vue'
import favoriteItem from '../Favorate/favoriteItem.vue'
export default {
  components: {
    greenHeader,
    favoriteItem
  },
  data () {
    return {
      info: ''
    }
  },
  created () {
    this.getRoomListFn()
  },
  methods: {
    // 获取已发布房源列表
    async getRoomListFn () {
      try {
        const { data } = await getRoomList()
        // console.log(data)
        this.info = data.body
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style></style>
