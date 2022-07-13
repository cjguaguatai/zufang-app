import request from '@/uilts/resquest'

export const login = () => {
  return request({
    url: '/user/login',
    method: 'post',
    data: ''
  })
}
