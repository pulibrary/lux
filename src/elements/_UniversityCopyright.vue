<template>
  <component :is="type" class="lux-copyright">
    &copy; {{ new Date().getFullYear() }} The Trustees of Princeton University
  </component>
</template>

<script>
/**
 * Used to show the University’s copyright notice, including the current year
 * (“© 20xx The Trustees of Princeton University”) in the footer.
 */
export default {
  name: "UniversityCopyright",
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
.lux-copyright {
  @include reset;
  @include stack-space($space-xx-small);
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;
}
</style>


<docs>
  ```jsx
  <university-copyright type="span"></university-copyright>
  ```
</docs>
