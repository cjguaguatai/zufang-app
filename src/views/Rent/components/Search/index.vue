<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.back()"
        @input="onInput"
        background="#f6f5f6"
      />
    </form>
    <van-cell-group>
      <van-cell
        :title="item.communityName"
        v-for="(item, index) in keyWordsCommunityList"
        :key="index"
        @click="clickFn(item)"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { keyWordsCommunity } from '@/api/area'
export default {
  data () {
    return {
      value: '',
      keyWordsCommunityList: []
    }
  },
  methods: {
    onSearch () {},
    async onInput () {
      try {
        const { data } = await keyWordsCommunity(
          this.value,
          this.$store.state.area.value
        )
        console.log(data)
        this.keyWordsCommunityList = data.body
      } catch (error) {
        console.log(error)
      }
    },
    clickFn (item) {
      this.$store.commit('setCommunity', item)
      this.$router.push('/rent/add')
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-search__content {
  background-color: #fff;
}
</style>
