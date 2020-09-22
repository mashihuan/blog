export const BASE_URL_DEV = 'http://localhost:3002'
export const BASE_URL_PRO = 'http://api.mashihuan.com'

export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PRO