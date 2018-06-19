<template>
  <div id="counter-event-example">
    <counter @update-count="updateTotal($event)"></counter>
    <svg-icon v-if="total >= 5" key="warning" name="pul-icon-warning" fill="rgb(255,0,0)" width="55px"></svg-icon>
    <svg-icon v-else key="digital" name="pul-icon-digital" fill="rgb(0, 0, 239)" width="55px"></svg-icon>
  </div>
</template>

<script>
/**
 * This example is a grouping of the _counter_ and the _svg-icon_ elements. It
 * demonstrates how to do simple state management in a template. When the counter total
 * reaches 5, the icon is replaced by a warning.
 *
 * More complex state management should be handled with Vuex.
 */
export default {
  name: "CounterIcon",
  status: "deprecated",
  release: "1.0.0",
  type: "Template",
  metaInfo: {
    title: "LUX Counter Icon: Simple State Management",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      iconColor: "rgb(0, 0, 239)",
      total: 0,
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
    updateTotal(event) {
      this.total = event
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
