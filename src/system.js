/**
 * System.js creates the Design System Library.
 * Used both in dev environment and when exporting the system.
 */
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

// Install the above defined components
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System)
}

export { instance }

// Finally export as default
export default System
