import TagManager from '@api/TagManager'
import { SET_TAGLIST } from './mutation-types'
const tag = new TagManager()
export default {
  namespaced: true,
  state: {
    tagList: []
  },
  getters: {
  },
  mutations: {
    [SET_TAGLIST] (state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    async getTagList ({commit}, payload) {
      const res = await tag.getTagList(payload)
      const { code, data } = res.data
      if (code === 0) {
        commit('SET_TAGLIST', data)
      }
    }
  }
}
