import Axios from 'axios'

const service = Axios.create({
  baseURL: 'http://localhost:3000/api'
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
