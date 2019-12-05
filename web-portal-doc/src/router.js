import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Guide from './views/Guide.vue'
import Resource from './views/Resource.vue'
import PortalBase from './views/ys-design-system/PortalBase.vue'
import BlockChain from './views/ys-design-system/BlockChain.vue'

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
      path: '/guide/:group?/:id?',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    },
    {
      path: '/design-portal-base',
      name: 'design-portal-base',
      component: PortalBase,
      children: [
        {
          path: 'block-chain',
          component: BlockChain
        },        
      ]
    }
  ]
})
