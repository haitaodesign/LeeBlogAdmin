import Axios from 'axios'

import { Message } from 'iview'

import router from '../../router'

const service = Axios.create({
  baseURL: 'http://localhost:3000/api'
})

service.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  config => {
    // 根据返回状态码定制一套提示方案
    const { code, message } = config.data
    if (code !== 0) {
      Message.error(message)
    }
    return config
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          window.localStorage.removeItem('token')
          router().replace({
            path: 'login'
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)
export default service
