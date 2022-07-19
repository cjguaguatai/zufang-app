import request from '@/uilts/resquest'

// 获取轮播图
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}

// 获取租房小组
export const getGroups = (id) => {
  return request({
    url: '/home/groups',
    params: {
      area: id
    }
  })
}
