// import { getJsonTree } from '@utils/jsonTree'
// import { cloneDeep } from '@utils/lodash'
import { SET_BREADLIST } from './mutation-types'
export default {
  namespaced: true,
  state: {
    menuList: [
      { id: 1, parent_id: 0, name: '内容管理' },
      { id: 2, parent_id: 1, name: '文章管理' },
      { id: 3, parent_id: 1, name: '分类管理' },
      { id: 4, parent_id: 1, name: '标签管理' },
      { id: 5, parent_id: 0, name: '系统管理' },
      { id: 6, parent_id: 5, name: '用户管理' }
    ],
    breadList: []
  },
  getters: {
  },
  mutations: {
    [SET_BREADLIST] (state, payload) {
      state.breadList = payload
    }
  },
  actions: {
  }
}
