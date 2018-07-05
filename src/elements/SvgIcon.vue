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
      default: "settings",
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: "#00264c",
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
    <svg-icon name="pul-icon-add-box" ariaLabel="add item" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-archives" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-article-express--small" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-audio" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-best-bet" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-book" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-bookmark" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-bookslibrary" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-calendar" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-caret-left" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-caret-right" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-cd" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-chat" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-cite" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-clock" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-collections" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-compass" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-data-file" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-databases" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-digital" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-dissertation" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-down" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-email" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-file-format-xml" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-file-pdf" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-film" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-guide" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-home" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-journal" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-library" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-links" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-location" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-lp" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-manuscript" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-map" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-minus-sign-alt" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-mixed-material" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-mobile" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-moveback" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-musical-score" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-newspaper" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-newtab" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-phone-book" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-phone" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-plus-sign-alt" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-print" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-question" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-refresh" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-remove" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-right" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-rssfeed" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-search" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-senior-thesis" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-share" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-spinner" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-staff" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-text" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-toggle.collapsed" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-toggle" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-unknown" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-video-projected-medium" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-visual-material" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-warning" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-web" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
    <svg-icon name="pul-icon-windows" fill="rgb(37, 138, 239)" width="55px"></svg-icon>
  </div>
  ```
</docs>
