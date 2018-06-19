import Vue from "vue"
import Vuex from "vuex"
import { counterModule } from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterModule,
  },
})
