import request from '@/uilts/resquest'
/**
 * 查询房屋具体信息
 * @param {Number} id
 * @returns promiso
 */
export const getHouse = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
/**
 * 发布房屋所需的条件
 * @returns
 */
export const releaseHomeCondition = () => {
  return request({
    url: '/houses/params'
  })
}
