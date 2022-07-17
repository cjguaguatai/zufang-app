import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/store/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token
    userToken: getToken('userToken') || {},
    // 租房详情页标头id
    id: getToken('id')
  },
  getters: {},
  mutations: {
    // 更改token
    setUserToken (state, data) {
      // console.log(state)
      // console.log(data)
      state.userToken = data
      setToken('userToken', data)
    },
    // 更改租房详情页标头id
    setId (state, data) {
      state.id = data
      setToken('id', data)
    },
    removeUserToken () {
      removeToken()
    }
  },
  actions: {},
  modules: {}
})
