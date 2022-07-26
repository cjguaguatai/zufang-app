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

// 查看房屋是否被收藏
export const getFavoriteShow = (id) =>
  request({
    url: `/user/favorites/${id}`
  })

// 添加收藏
export const addFavorite = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'post'
  })

// 删除收藏
export const removeFavorite = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'delete'
  })

/**
 * 发布房源
 * @param {Object} data
 * @returns
 */
export const sendHouse = (data) => {
  return request({
    url: '/user/houses',
    method: 'post',
    data
  })
}
