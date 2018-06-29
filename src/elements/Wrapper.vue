<template>
  <component :is="type" class="wrapper"
    :class="['wrapper', { 'full-width': fullWidth }]">
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
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include reset;
  @include inset-space($space-large);
  font-family: $font-family-text;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-base;
  @media #{$media-query-large} {
    @include inset-space($space-x-large);
  }
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
