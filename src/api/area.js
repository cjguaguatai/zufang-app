import request from '@/uilts/resquest'

// 获取城市列表数据
export const getCityList = () => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}
// 获取热门城市列表
export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}

// 查看城市名称是否有房源
export const cityInfo = (name) =>
  request({
    url: '/area/info',
    params: {
      name
    }
  })
/**
 * 去出租根据关键词查询
 * @param {string} name
 * @param {string} id
 * @returns
 */
export const keyWordsCommunity = (name, id) => {
  return request({
    url: `/area/community?name=${name}&id=${id}`
  })
}
