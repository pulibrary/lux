<template>
  <component :is="type"
    :class="['lux-wrapper', { 'full-width': fullWidth }]">
    <slot/>
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper doesn’t provide customizable options.
 */
export default {
  name: "Wrapper",
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
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-wrapper {
  @include reset;
  margin: auto;

  // this overrides the full-width class rules making the OrderManager gallery
  // have a gap on larger screens
  // @media #{$media-query-large} {
  //   max-width: 1170px;
  // }

  .full-width {
    width: 100%;
  }
}
</style>


<docs>
  ```jsx
  <wrapper type="div">Wrapper can be used to wrap any components together.</wrapper>
  ```
</docs>
