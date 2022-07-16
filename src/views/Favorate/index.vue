<template>
  <div>
    <greenHeader title="我的收藏" />
    <favoriteItem v-for="(item, index) in info" :key="index" :list="item" />
  </div>
</template>

<script>
import greenHeader from '@/components/greenHeader.vue'
import favoriteItem from '@/views/Favorate/favoriteItem.vue'
import { getFavorite } from '@/api/user'
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
  },
  methods: {
    async getFavoriteFn () {
      try {
        const { data } = await getFavorite()
        console.log(data)
        this.info = data.body
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style></style>
