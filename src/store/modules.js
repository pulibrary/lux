import { galleryState, galleryMutations } from "./gallery/index"

export const counterModule = {
  state: { count: 10 },

  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++
    },
  },

  getters: {
    count: state => {
      return state.count
    },
  },
}

export const galleryModule = {
  // namespaced: true,
  state: galleryState,
  mutations: galleryMutations,
}

let modules
export default (modules = { counterModule, galleryModule })
