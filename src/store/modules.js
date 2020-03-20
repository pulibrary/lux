import { galleryState, galleryMutations } from "./gallery/index"
import { cartState, cartMutations } from "./cart/index"

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

export const cartModule = {
  // namespaced: true,
  state: cartState,
  mutations: cartMutations,
}

let modules
export default modules = { counterModule, galleryModule, cartModule }
