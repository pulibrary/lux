import Vue from "vue"
import Vuex from "vuex"
import { counterModule, galleryModule, cartModule } from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    gallery: galleryModule,
    cart: cartModule,
  },
})
