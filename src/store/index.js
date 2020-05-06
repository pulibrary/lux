import Vue from "vue"
import Vuex from "vuex"
import { counterModule, galleryModule, treeModule } from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    gallery: galleryModule,
    tree: treeModule,
  },
})
