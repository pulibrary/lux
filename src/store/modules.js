import { galleryState, galleryMutations } from "./gallery/index"
import { resourceState, resourceMutations, resourceGetters } from "./resource/index"

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

export const resourceModule = {
  // namespaced: true,
  // actions: any async actions are should be handled by the host app
  state: resourceState,
  mutations: resourceMutations,
  getters: resourceGetters,
  modules: {
    gallery: galleryModule,
  },
}

let modules
export default (modules = { counterModule, galleryModule, resourceModule })
