<template>
  <component :is="type" class="lux-spacer">
    <slot/>
  </component>
</template>

<script>
/**
 * Used to fill available space or make space between two components.
 */
export default {
  name: "Spacer",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-spacer {
  @include reset;
  flex-grow: 1 !important;
}
</style>


<docs>
  ```jsx
  <spacer></spacer>
  ```
</docs>
