import BaseAxios from '../utils/httpClient/index'
class UploadManager extends BaseAxios {
  _delete (data) {
    return this.post('img/delete', data)
  }
}

export default UploadManager
