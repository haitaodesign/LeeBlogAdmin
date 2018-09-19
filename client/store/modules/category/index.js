import CategoryManager from '@api/CategoryManager'
import { SET_CATEGORYLIST } from './mutation-types'
const category = new CategoryManager()
export default {
  namespaced: true,
  state: {
    categoryList: []
  },
  getters: {
  },
  mutations: {
    [SET_CATEGORYLIST] (state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    async getCategoryList ({commit}, payload) {
      const res = await category.getCategoryList(payload)
      const { code, data } = res.data
      if (code === 0) {
        commit('SET_CATEGORYLIST', data)
      }
    }
  }
}
