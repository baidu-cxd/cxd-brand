import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scroll: 0 ,
    headerTip: false,
    pageData: null
  },
  mutations: {
    scroll (state, n) {
      state.scroll = n
    },
    toggleHeaderTip() {
      state.headerTip = !state.headerTip
    },
    changePageData(state, n) {
      state.pageData = n
    }
  },
  actions: {

  }
})
