<template>
  <component :is="type" :aria-label="ariaLabel" class="svg-logo">
  </component>
</template>

<script>
let cache = new Map()
const req = require.context("@/assets/logos/", true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "SvgLogo",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The name of the icon to display.
     */
    name: {
      required: true,
      default: "settings",
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: "icon",
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * The width of the icon.
     */
    width: {
      type: String,
      default: "16px",
    },
    /**
     * The height of the icon.
     */
    height: {
      type: String,
      default: "auto",
    },
  },
  async mounted() {
    let currPath = req("./" + this.name + ".svg")
    if (!cache.has(currPath)) {
      try {
        cache.set(currPath, fetch(currPath).then(r => r.text()))
      } catch (e) {
        cache.delete(currPath)
      }
    }
    if (cache.has(currPath)) {
      this.$el.innerHTML = await cache.get(currPath)
      this.$el.children[0].style.width = this.width
      this.$el.children[0].style.height = this.height
    }
  },
}
</script>

<docs>
  ```jsx
  <div>
    <svg-logo name="university-logo-one-line-white" width="200px" />
    <svg-logo name="university-logo-one-line" width="200px" />
    <svg-logo name="university-logo-white" width="200px" />
    <svg-logo name="university-logo" width="200px" />
  </div>
  ```
</docs>
