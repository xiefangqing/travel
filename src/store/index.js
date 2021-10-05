import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // 类似computed，避免数据冗余
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
