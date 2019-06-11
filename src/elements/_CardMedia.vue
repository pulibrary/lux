<template>
  <component :is="type" class="lux-card-media">
    <slot></slot>
  </component>
</template>

<script>
/**
 * Used to establish a section of a card for rich media content and icons.
 */
export default {
  name: "CardMedia",
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
.lux-card-media .lux-icon {
  padding: $space-small;

  @media #{$media-query-large} {
    padding: $space-base;
  }
}
</style>

<docs>
  ```jsx
  <card-media>
    <lux-icon-base
      width="50"
      height="50"
    ><lux-icon-globe /></lux-icon-base>
  </card-media>
  ```
</docs>
