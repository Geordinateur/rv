import { createStore } from 'vuex'
import auth from './auth.module'

export default createStore({
  state: {
			user: {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})