import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scroll: 0 ,
    headerTip: false
  },
  mutations: {
    scroll (state, n) {
      state.scroll = n
    },
    toggleHeaderTip () {
      state.headerTip = !state.headerTip
    }
  },
  actions: {

  }
})
