<template>
  <component :is="type" class="lux-library-contact" :theme="theme">
    <a href="https://library.princeton.edu">
      <logo-library width="155px" height="34px" v-if="theme === 'dark'" />
      <logo-library width="155px" height="34px" v-else color="#000" />
    </a>
  </component>
</template>

<script>
/**
 * Used to identify that the site is a Princeton University site in the footer
 * and links to princeton.edu.
 */
export default {
  name: "LibraryLogo",
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
     * Whether the theme is dark or light.
     */
    theme: {
      type: String,
      default: "dark",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-library-contact {
  @include reset;
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;
}
</style>

<docs>
  ```jsx
  <div>
    <library-logo></library-logo>
  </div>
  ```
</docs>
