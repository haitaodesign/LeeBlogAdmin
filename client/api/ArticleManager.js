import BaseAxios from '../utils/httpClient/index'
class ArticleManager extends BaseAxios {
  getArticleList (page = 0, size = 10) {
    return this.get(`/articles?page=${page}&size=${size}`)
  }
  add (data) {
    return this.post('article/add', data)
  }
  update (data) {
    return this.post('article/update', data)
  }
  _delete (data) {
    return this.delete('article/delete' + '/' + data._id)
  }
}

export default ArticleManager
