// resource-store-config.spec.js
import galleryModule from "./gallery-store-config.spec.js"
import { resourceState, resourceMutations, resourceGetters } from "../../src/store/resource"

export default {
  state: resourceState,
  mutations: resourceMutations,
  getters: resourceGetters,
  modules: {
    gallery: galleryModule,
  },
}
