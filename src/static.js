// Vue Design System: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import WebFontLoader from "@/utils/webFontLoader" // eslint-disable-line no-unused-vars
import Meta from "vue-meta"
import store from "@/store"

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

// module.exports = DesignSystem

Vue.use(DesignSystem)
Vue.use(Meta)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
module.exports = new Vue({
  el: ".lux",
  store,
})
