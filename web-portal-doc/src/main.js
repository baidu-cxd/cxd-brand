import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import '@/style/index.styl' //设计系统样式
import components from '@/utils/components.js' //加载默认组件
Vue.use(components) // 加载自定义组件
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: '/api/',
  timeout: 30000,
  headers: {
    'X-Auth-Token' : 'uQ2Fi6q5PAfpivhDqRU63GbqvX0FBgAGAc5BYedj',
    'Access-Control-Allow-Headers':'Content-Type, api_key, Authorization'
}
});
Vue.prototype.qs = qs
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
