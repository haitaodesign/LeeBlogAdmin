import BaseAxios from '../utils/httpClient/index'
class ArticleManager extends BaseAxios {
  getArticleList (data) {
    return this.post('articles', data)
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
  getArticleById (data) {
    return this.post('article/getArticleById', data)
  }
}

export default ArticleManager
