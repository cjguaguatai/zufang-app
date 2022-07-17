import request from '@/uilts/resquest'
// 登录接口
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 登出接口
export const logout = (token) => {
  return request({
    url: '/user/logout',
    method: 'post',
    data: {
      token
    }
  })
}

// 更新用户信息
export const update = () => {
  return request({
    url: '/user',
    method: 'get'
  })
}

// 获取收藏列表
export const getFavorite = () => {
  return request({
    url: '/user/favorites'
  })
}

// 查看已发布房源列表
export const getRoomList = () => {
  return request({
    url: '/user/houses'
  })
}
