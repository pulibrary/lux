<template>
  <component :is="type" class="lux-card-content">
    <slot></slot>
  </component>
</template>

<script>
/**
 * Used to establish a section of a card for supplementary content.
 */
export default {
  name: "CardContent",
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
.lux-card-content {
  padding: 0 $space-small $space-small;

  @media #{$media-query-large} {
    padding: $space-base;
  }
}
</style>

<docs>
  ```jsx
  <card-content>
    <text-style type="span" variation="small"><lux-icon-base
      width="18"
      height="18"
    ><lux-icon-thumbs-up /></lux-icon-base>Approved</text-style>
  </card-content>
  ```
</docs>
