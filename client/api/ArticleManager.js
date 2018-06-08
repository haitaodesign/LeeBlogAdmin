'use strict'
import BaseAxios from '../utils/httpClient/index'
class ArticleManager extends BaseAxios {
  getArticleList (page = 0, size = 10) {
    return this.get(`/users?page=${page}&size=${size}`)
  }
}

export default ArticleManager
