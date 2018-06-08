import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './styles/variable.styl'
import CreateRouter from './router/index'
import CreateStore from './store/index'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)
const router = CreateRouter()
const store = CreateStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
