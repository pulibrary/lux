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
    <svg-icon name="pul-icon-add-box" fill="rgb(44, 110, 175)" ariaLabel="add item" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-archives" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-arrow-down" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-article-express--small" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-audio" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-best-bet" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-book" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-bookmark" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-bookslibrary" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-calendar" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-caret-left" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-caret-right" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-cd" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-chat" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-cite" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-clock" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-collections" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-compass" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-data-file" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-databases" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-digital" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-dissertation" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-down" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-email" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-file-format-xml" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-file-pdf" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-film" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-guide" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-home" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-journal" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-library" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-links" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-location" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-lp" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-manuscript" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-map" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-minus-sign-alt" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-mixed-material" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-mobile" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-moveback" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-musical-score" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-newspaper" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-newtab" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-phone-book" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-phone" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-picture-solid" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-plus-sign-alt" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-print" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-question" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-refresh" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-remove" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-right" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-rssfeed" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-search" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-senior-thesis" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-share" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-spinner" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-staff" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-text" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-toggle.collapsed" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-toggle" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-unknown" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-video-projected-medium" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-visual-material" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-warning" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-web" width="48px" height="48px"></svg-icon>
    <svg-icon name="pul-icon-windows" width="48px" height="48px"></svg-icon>
  </div>
  ```
</docs>
