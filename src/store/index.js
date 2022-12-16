import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     meditationDuration: 0,
//     meditationType: 0,
//     meditationSound: "",
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
export default new Vuex.Store({
  state: {
    meditationDuration: 0,
    meditationType: 0,
    meditationSound: "",
  },
  mutations: {
    setMeditationType(state, type) {
      state.meditationType = type
    },
    setMeditationSound(state, type) {
      state.meditationSound = type
    },
    setMeditationDuration(state, duration) {
      state.meditationDuration = duration
    }
  },
  actions: {
    setMeditationType({ commit }, type) {
      commit('setMeditationType', type)
    },
    setMeditationSound({ commit }, type) {
      commit('setMeditationSound', type)
    },
    setMeditationDuration({ commit }, duration) {
      commit('setMeditationDuration', duration)
    }

  }
})
