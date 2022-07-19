import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
Vue.use(VueRouter)

const routes = [
  // 重定向到主页
  {
    path: '/',
    redirect: '/home'
  },
  // 登录页面
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  // 布局页面
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      // 主页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      // 找房页面
      {
        path: '/findroom',
        name: 'findroom',
        component: () => import('@/views/FindRoom')
      },
      // 资讯页面
      {
        path: '/info',
        name: 'info',
        component: () => import('@/views/Lnfo')
      },
      // 我的页面
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  // 我的收藏页面
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  // 房屋详情页面
  {
    // path: `/detail/${store.state.id}`,
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail')
  },
  // 我的出租页面
  {
    path: '/rent',
    name: 'rent',
    component: () => import('@/views/Rent')
  },
  // 城市列表
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/City')
  }
]
const router = new VueRouter({
  routes
})

export default router
