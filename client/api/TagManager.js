import BaseAxios from '../utils/httpClient/index'
class TagManager extends BaseAxios {
  getTagList (data) {
    return this.post('tags', data)
  }
  add (data) {
    return this.post('tag/add', data)
  }
  update (data) {
    return this.post('tag/update', data)
  }
  _delete (data) {
    return this.delete('tag/delete' + '/' + data._id)
  }
}

export default TagManager
