<template>
  <component :is="type" class="lux-accessibility">
    <a href="https://accessibility.princeton.edu/">Accessibility</a>
  </component>
</template>

<script>
/**
 * Used to show the University’s Accessibility site in the footer.
 */
export default {
  name: "UniversityAccessibility",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "span",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-accessibility {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;

  a {
    color: $color-rich-black;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>


<docs>
  ```jsx
  <university-accessibility type="span"></university-accessibility>
  ```
</docs>
