import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Guide from './views/Guide.vue'
import Resource from './views/Resource.vue'

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
      path: '/index',
      name: 'index-true',
      component: Index      
    },
    {
      path: '/guide/:id?',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    }
  ]
})
