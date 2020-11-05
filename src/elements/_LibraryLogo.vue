<template>
  <component :is="type" :theme="theme" class="lux-library-logo">
    <a href="https://library.princeton.edu">
      <logo-library width="155px" height="34px" v-if="theme === 'dark'" class="full-logo" />
      <logo-library width="155px" height="34px" v-else color="#000" class="full-logo" />
      <logo-library-icon width="34px" height="34px" class="icon-only" />
      <title id="logo-library">Princeton University Library Logo</title>
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
.lux-library-logo {
  margin: $space-x-small 0;
}

.full-logo {
  display: none;
}

.icon-only {
  display: block;
}

@media #{$media-query-x-large} {
  .icon-only {
    display: none;
  }
  .full-logo {
    display: block;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <library-logo></library-logo>
  </div>
  ```
</docs>
