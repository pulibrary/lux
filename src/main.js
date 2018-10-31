// Vue Design System: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "@/App"
import router from "@/router"
import WebFontLoader from "@/utils/webFontLoader" // eslint-disable-line no-unused-vars
import Meta from "vue-meta"
import store from "@/store/index"

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

Vue.use(DesignSystem)
Vue.use(Meta)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  router: router,
  template: "<App/>",
  components: { App },
})
