<template>
  <component :is="type" class="spacer">
    <slot/>
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper doesn’t provide customizable options.
 */
export default {
  name: "Spacer",
  status: "review",
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
    /**
     * Determines whether the wrapper takes up 100% of the parent container.
     */
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.spacer {
  @include reset;
  flex-grow: 1 !important;
}
</style>


<docs>
  ```jsx
  <spacer></spacer>
  ```
</docs>
