import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import level from './views/pages/level'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html',
      name: 'index',
      component: index
    },
    {
      path: '/level.html',
      name: 'level',
      component: level
    }
  ],

})