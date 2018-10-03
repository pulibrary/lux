<template>
  <component :is="type" class="lux-university-logo">
    <a href="https://princeton.edu"><svg-icon name="logo-university" ariaLabel="Princeton University" width="142px" height="40px"></svg-icon></a>
  </component>
</template>

<script>
/**
 * Used to identify that the site is a Princeton University site in the footer
 * and links to princeton.edu.
 */
export default {
  name: "UniversityLogo",
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
.lux-university-logo {
  @include reset;
  @include stack-space($space-x-small);
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
