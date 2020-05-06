import { galleryState, galleryMutations } from "./gallery/index"
import { treeState, treeMutations } from "./tree/index"

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

export const treeModule = {
  state: treeState,
  mutations: treeMutations,
}

let modules
export default modules = { counterModule, galleryModule, treeModule }
