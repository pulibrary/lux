import Vue from "vue"
import Vuex from "vuex"
import { counterModule, galleryModule, resourceModule } from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    ordermanager: resourceModule,
    gallery: galleryModule,
  },
})
