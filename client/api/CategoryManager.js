import BaseAxios from '../utils/httpClient/index'
class CategoryManager extends BaseAxios {
  getCategoryList (page = 0, size = 10) {
    return this.get(`/categories?page=${page}&size=${size}`)
  }
  add (data) {
    return this.post('category/add', data)
  }
  update (data) {
    return this.post('category/update', data)
  }
  _delete (data) {
    return this.delete('category/delete' + '/' + data._id)
  }
}

export default CategoryManager
