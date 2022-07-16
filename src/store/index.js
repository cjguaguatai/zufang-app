import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/store/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: getToken() || {}
  },
  getters: {},
  mutations: {
    setUserToken (state, data) {
      // console.log(state)
      // console.log(data)
      state.userToken = data
      setToken(data)
    },
    removeUserToken () {
      removeToken()
    }
  },
  actions: {},
  modules: {}
})
