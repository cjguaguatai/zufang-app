import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/findroom',
        name: 'findroom',
        component: () => import('@/views/FindRoom')
      },
      {
        path: '/info',
        name: 'info',
        component: () => import('@/views/Lnfo')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  {
    // path: `/detail/${store.state.id}`,
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail')
  }
]
const router = new VueRouter({
  routes
})

export default router
