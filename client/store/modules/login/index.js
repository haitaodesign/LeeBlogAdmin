import UserManager from '@api/UserManager'
const user = new UserManager()
export default {
  namespaced: true,
  state: {
    userName: ''
  },
  getters: {
  },
  moutations: {
  },
  actions: {
    async login ({commit}, payload) {
      const res = await user.login(payload)
      // console.log(res)
      const { data } = res
      console.log(data)
    }
  }
}
