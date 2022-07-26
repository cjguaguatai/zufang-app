import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/store/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token
    userToken: getToken('userToken') || {},
    // 租房详情页标头id
    id: getToken('id'),
    // 首页展示城市信息、及城市列表当前城市
    area: getToken('area') || {},
    isShow: '',
    community: {
      communityName: '请输入小区名称'
    }
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
    // 更改area
    setArea (state, data) {
      state.area = data
      setToken('area', data)
    },
    setIsShow (state, data) {
      state.isShow = data
    },
    // 点击小区列表传参
    setCommunity (state, data) {
      state.community = data
    },
    removeUserToken () {
      removeToken()
    }
  },
  actions: {},
  modules: {}
})
