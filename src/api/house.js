import request from '@/uilts/resquest'

export const getHouse = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
