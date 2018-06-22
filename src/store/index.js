import Vue from "vue"
import Vuex from "vuex"
import { counterModule, resourceModule } from "./modules"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    ordermanager: resourceModule,
  },
})
