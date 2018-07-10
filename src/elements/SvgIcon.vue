<template>
  <component :is="type" :aria-label="ariaLabel" class="svg-icon">
  </component>
</template>

<script>
let cache = new Map()
const req = require.context("@/assets/icons/", true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "SvgIcon",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The name of the icon to display.
     */
    name: {
      required: true,
      default: "pul-icon-data-file",
    },
    /**
     * Descriptive text to be read to screenreaders. Do not include if use of
     * icon is decorative.
     */
    ariaLabel: {
      type: String,
      default: "",
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: "rgb(0, 17, 35)",
    },
    /**
     * The width of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    width: {
      required: true,
      type: String,
      default: "16px",
    },
    /**
     * The height of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    height: {
      required: true,
      type: String,
      default: "16px",
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
      this.$el.children[0].style.fill = this.fill
      this.$el.children[0].style.width = this.width
      this.$el.children[0].style.height = this.height
    }
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-flex;
  align-self: center;
}
</style>

<docs>
  ```jsx
  <div>
    <svg-icon name="pul-icon-file" fill="rgb(44, 110, 175)" ariaLabel="add item" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-picture-solid" width="48px" height="48px"></svg-icon>
  </div>
  ```
</docs>
