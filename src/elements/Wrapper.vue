<template>
  <component
    :is="type"
    :class="[
      'lux-wrapper',
      { 'lux-full-width': fullWidth },
      { 'lux-flex-container': flexContainer },
      horizontal,
    ]"
  >
    <slot />
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper can be span the full width of the viewport or limited to a max-width of 1170px.
 */
export default {
  name: "Wrapper",
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
    /**
     * Determines whether the wrapper takes up 100% of the parent container.
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines how the flexbox wrapper is horizontally aligned. This value defaults to
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
.lux-wrapper {
  margin: auto;

  @media #{$media-query-large} {
    max-width: 1170px;
    padding: 1rem;
  }

  &.lux-full-width {
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <wrapper>Wrapper can be used to wrap any components together.</wrapper>
  </div>
  ```
</docs>
