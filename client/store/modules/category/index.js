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
  moutations: {
    [SET_CATEGORYLIST] (state, payload) {
      state.categoryList = payload.list
    }
  },
  actions: {
    async getCategoryList ({commit}, payload) {
      const res = await category.getCategoryList(payload)
      // console.log(res)
      const { data } = res
      console.log(data)
    }
  }
}
