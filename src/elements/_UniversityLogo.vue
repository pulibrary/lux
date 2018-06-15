<template>
  <component :is="type" class="university-logo">
    <svg-icon name="university-logo" ariaLabel="Princeton University" width="200px"></svg-icon>
  </component>
</template>

<script>
/**
 * Used to show the University’s copyright notice, including the current year
 * (“© 20xx The Trustees of Princeton University”) in the footer.
 */
export default {
  name: "UniversityLogo",
  status: "review",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.accessibility {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;
}
</style>


<docs>
  ```jsx
  <university-logo type="div"></university-logo>
  ```
</docs>
