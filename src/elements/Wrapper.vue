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
 * associated actions. Wrapper doesn’t provide customizable options.
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
     * Determines whether the wrapper is a flexbox container.
     */
    flexContainer: {
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

  &.lux-flex-container {
    padding: 0 1rem 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

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
}
</style>

<docs>
  ```jsx
  <div>
    <wrapper>Wrapper can be used to wrap any components together.</wrapper>
  </div>
  ```
</docs>
