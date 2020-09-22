import axios from 'axios'
import { message } from 'antd'
import { BASE_URL } from '@/common/config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {}
})

instance.interceptors.request.use((config) => {
  // config.headers.sessionToken = sessionStorage.getItem('sessionToken')
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((res) => {
  if (res.data.error_code !== 10000) {
    message.error(res.data.message || 'Error')
    return res.data
  } else {
    return res.data
  }
}, (err) => {
  message.error((err.response && err.response.data.message) || 'Error')
  return Promise.reject(err)
})

export default instance
