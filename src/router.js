import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/Apod.vue')
    }
  ]
})
