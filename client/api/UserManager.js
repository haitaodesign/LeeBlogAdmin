import BaseAxios from '../utils/httpClient/index'
class UserManager extends BaseAxios {
  login (data) {
    return this.post('login', data)
  }
}

export default UserManager
