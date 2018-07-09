<template>
  <component :is="type" class="library-logo">
    <a href="https://library.princeton.edu"><svg-icon name="library-logo" ariaLabel="Princeton University Library" width="155px" height="34px"></svg-icon></a>
  </component>
</template>

<script>
/**
 * Used to identify that the site is a Princeton University site in the footer
 * and links to princeton.edu.
 */
export default {
  name: "LibraryLogo",
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
  },
}
</script>

<style lang="scss" scoped>
.library-logo {
  @include reset;
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;
}
</style>


<docs>
  ```jsx
  <library-logo></library-logo>
  ```
</docs>
