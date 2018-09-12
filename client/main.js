import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import iView from 'iview'
import iEditor from 'iview-editor'
import 'iview/dist/styles/iview.css'
import 'iview-editor/dist/iview-editor.css'
import './styles/variable.styl'
import CreateRouter from './router/index'
import CreateStore from './store/index'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)
Vue.use(iEditor)
const router = CreateRouter()
const store = CreateStore()

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    const path = to.path
    if (path !== '/login') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
