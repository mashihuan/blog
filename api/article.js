import request from '@/common/request'

export function list(data) {
  return request({
    url: '/v1/article',
    method: 'GET',
    params: data
  })
}

export function hot(data) {
  return request({
    url: '/v1/article/hot',
    method: 'GET',
    params: data
  })
}

export function detail(data) {
  return request({
    url: '/v1/article/detail',
    method: 'GET',
    params: data
  })
}
