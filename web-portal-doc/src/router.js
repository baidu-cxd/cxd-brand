import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Doc from './views/Doc.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc
    }
  ]
})
