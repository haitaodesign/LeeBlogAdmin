import Axios from 'axios'

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
export default service
