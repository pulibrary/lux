// Vue Design System: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Vuex from "vuex"
import App from "@/App"
import router from "@/router"
import WebFontLoader from "@/utils/webFontLoader" // eslint-disable-line no-unused-vars
import Meta from "vue-meta"

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

Vue.use(DesignSystem)
Vue.use(Meta)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    here: "test",
  },
  getters: {
    here(state) {
      return state.here
    },
  },
})

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
})
