<template>
  <component :is="type" :class="['lux-col', columns]">
    <slot />
  </component>
</template>

<script>
/**
 * Used to build the containers to layout a page. Grid items need to be nested inside a `Wrapper`
 * component with the prop of `flexContainer`. Do not nest grid items inside other grid items.
 *
 */
export default {
  name: "GridItem",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the container.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Sets the size of the column. Prefix with `sm-` or `lg-`. Based on a 12 column grid.
     */
    columns: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss">
$grid-columns: 12;

* {
  box-sizing: border-box;
}

.lux-col {
  padding: $space-small 0 0 $space-small;
  background-clip: content-box;
  flex-basis: 100%;
}

@function round-width($i) {
  $width: floor(100 * $i * 100 / $grid-columns) / 100;
  @return $width#{"%"};
}

@for $i from 1 through $grid-columns {
  .sm-#{$i} {
    flex-basis: round-width($i);
    max-width: round-width($i);
  }
}

@media only screen and #{$media-query-large} {
  @for $i from 1 through $grid-columns {
    .lg-#{$i} {
      flex-basis: round-width($i);
      max-width: round-width($i);
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <wrapper flexContainer>
      <grid-item columns="lg-9 sm-6">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-3 sm-6">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-3">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-6">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-3">Grid items can be used to layout a page using a 12 column grid.</grid-item>
    </wrapper>
  </div>
  ```
</docs>
