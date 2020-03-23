import Vue from "vue"
import Vuex from "vuex"
import { counterModule, galleryModule, cartModule } from "./modules"
import VuexPersist from "vuex-persist"

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage,
})

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    gallery: galleryModule,
    cart: cartModule,
  },
  plugins: [vuexPersist.plugin],
})
