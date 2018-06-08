import service from './interceptors'
import QS from 'qs'
class BaseAxios {
  constructor () {
    this.$http = service
    this.OptionsDefault = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return QS.stringify(data)
      }
    }
  }
  get (url, config = {}) {
    return this.$http.get(url, config)
  }
  post (url, data = undefined, config = {}) {
    return this.$http.post(url, data, {...this.OptionsDefault, ...config})
  }
  put (url, data = undefined, config = {}) {
    return this.$http.put(url, data, {...this.OptionsDefault, ...config})
  }
  delete (url, data = undefined, config = {}) {
    return this.$http.delete(url, config)
  }
}
export default BaseAxios
