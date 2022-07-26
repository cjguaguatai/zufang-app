import request from '@/uilts/resquest'

const formData = new FormData()
export const sendPhoto = (file) => {
  formData.append('file', file)
  return request({
    url: '/houses/image',
    method: 'post',
    data: formData
  })
}
