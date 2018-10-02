/**
 * System.js creates the Design System Library.
 * Used both in dev environment and when exporting the system.
 */
import "es6-promise/auto"
import instance from "@/utils/vueInstance"
import vuexModules from "@/store/modules"
import WebFontLoader from "@/utils/webFontLoader"
export const modules = vuexModules

// Defines contexts to require
const contexts = [
  require.context("@/elements/", true, /\.vue$/),
  require.context("@/patterns/", true, /\.vue$/),
  require.context("@/icons/", true, /\.vue$/),
  require.context("@/logos/", true, /\.vue$/),
  require.context("@/templates/", true, /\.vue$/),
]

const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

export default {
  install(Vue) {
    components.forEach(c => Vue.component(c.name, c))
  },
}

export { instance }
