import request from '@/common/request'

export function list(data) {
  return request({
    url: '/v1/case',
    method: 'GET',
    params: data
  })
}