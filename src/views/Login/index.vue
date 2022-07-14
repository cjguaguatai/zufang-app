<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onClickBack"
      class="navbar"
    />
    <van-form @submit="sendSubmit">
      <van-field v-model="username" name="用户名" placeholder="请输入账号" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          class="sendBtn"
          @click="sendBtn"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="register">还没有账号，去注册</div>
    <div></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickBack () {
      this.$router.back()
    },
    async sendSubmit () {
      try {
        const res = await login(this.username, this.password)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    sendBtn () {
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.$toast('请不要输入空值')
      }
      if (!/^[a-zA-Z0-9]{5,12}$/.test(this.password.trim())) {
        this.$toast('密码格式5-12位的字母和数字')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.van-icon {
    color: #fff;
  }
}
.sendBtn {
  background-color: #21b97a;
}
.register {
  width: 230px;
  font-size: 12px !important;
  margin: 0 auto;
  text-align: center;
}
</style>
