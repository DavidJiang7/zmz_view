import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './utils/http'
import storage from './utils/storage'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.http = http
Vue.prototype.storage = storage
Vue.use(ElementUI)

// //   路由守卫
// router.beforeEach((to, from, next) => {
//   // let token = localStorage.getItem('token')
//   // if (token) {

//   // } else {
//   //   next('/')
//   // }
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
