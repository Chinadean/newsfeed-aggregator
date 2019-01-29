import Vue from 'vue'
import Vuex from 'vuex'

// modules
import news from './modules/news'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    namespaced: true,
    news
  },
  strict: false
})

export default store
