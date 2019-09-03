import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Apod from './views/Apod.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apod',
      name: 'apod',
      component: Apod
    }
  ]
})
