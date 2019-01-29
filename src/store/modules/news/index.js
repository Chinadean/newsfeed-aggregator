import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const news = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default news
