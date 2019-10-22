<template>
  <component :is="type" :class="['lux-flex-container', horizontal]">
    <slot />
  </component>
</template>

<script>
/**
 * Used to build the container of GridItems.
 */
export default {
  name: "GridContainer",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the grid container.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Determines how the flexbox container is horizontally aligned. This value defaults to
     * having space between grid items. Options include `start`, `center`, and `end`.
     */
    horizontal: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-flex-container {
  padding: 0 1rem 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  &.start {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.end {
    justify-content: flex-end;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <grid-container>Grid container can be used to contain grid items together.</grid-container>
  </div>
  ```
</docs>
