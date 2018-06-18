<template>
  <component :is="type" class="index">
    <counter v-bind:count="count"
  v-on:update:count="count = $event"></counter>
    <svg-icon name="pul-icon-warning" v-on:update:count = "updateColor($event)" v-bind:fill="iconColor" width="55px"></svg-icon>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "CounterIcon",
  status: "deprecated",
  release: "1.0.0",
  type: "Template",
  metaInfo: {
    title: "LUX Counter Icon",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      iconColor: "rgb(37, 138, 239)",
    }
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateColor(event) {
      console.log(event)
      this.iconColor = "rgb(255,0,0)"
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
  <counter-icon></counter-icon>
  ```
</docs>
