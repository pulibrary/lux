<template>
  <component :is="type" :class="['lux-col', columns, vertical, { push: offset }]">
    <slot />
  </component>
</template>

<script>
/**
 * Used to build the containers to layout a page. Grid items need to be nested inside a `GridContainer`
 * component. Do not nest grid items inside other grid items.
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
     * The inclusion of `auto` will set that grid item to have a width based on the width and height of the content.
     */
    columns: {
      type: String,
      default: "",
    },
    /**
     * Pushes grid items to the right side of the container.
     */
    offset: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets the vertical alignment of the item. `start`, `center`, or `end`. For horizontal alignment, please look at the grid-container component.
     */
    vertical: {
      type: String,
      default: "start",
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
  flex-basis: 1;
  flex-grow: 1;
  max-width: 100%;

  &.auto {
    flex-basis: auto;
    flex-grow: 0;
  }

  &.start {
    align-self: flex-start;
  }

  &.center {
    align-self: center;
  }

  &.end {
    align-self: flex-end;
  }

  &.push {
    margin-left: auto;
  }
}

@function round-width($i) {
  $width: floor(100 * $i * 100 / $grid-columns) / 100;
  @return $width#{"%"};
}

@for $i from 1 through $grid-columns {
  .sm-#{$i} {
    flex-basis: round-width($i);
    flex-grow: 0;
    max-width: round-width($i);

    &.auto {
      flex-basis: auto;
    }
  }
}

@media only screen and #{$media-query-large} {
  .lux-col {
    flex-basis: 0;
  }

  @for $i from 1 through $grid-columns {
    .lg-#{$i} {
      flex-basis: round-width($i);
      flex-grow: 0;
      max-width: round-width($i);

      &.auto {
        flex-basis: auto;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <grid-container>
      <grid-item columns="lg-9 sm-6">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <!-- passing "auto" as a value in columns will size the grid item based on width and height of the item with space between each grid item -->
      <grid-item columns="lg-3 sm-6 auto" :offset="true">
        <dropdown-menu type="links" button-label="Select Options" :menu-items="[
          {name: 'Vegetable', component: 'Vegetable', disabled: true},
          {name: 'Fruit', component: 'Fruit'},
          {name: 'Apple', component: 'Apple', parent: 'Fruit'},
          {name: 'Lettuce', component: 'Lettuce', parent: 'Vegetable'},
          {name: 'Carrot', component: 'Carrot', parent: 'Vegetable'},
          {name: 'Pear', component: 'Pear', parent: 'Fruit'},
        ]"></dropdown-menu>
      </grid-item>
    </grid-container>

    <!-- inline styling for demonstration purposes only -->
    <grid-container horizontal="center" style="height:200px;">
      <grid-item columns="lg-3" vertical="start" style="border: 1px solid black; padding: 1rem;">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-3 auto" vertical="center" style="border: 1px solid black; padding: 1rem;" :offset="true">Grid items can be used to layout a page using a 12 column grid.</grid-item>
      <grid-item columns="lg-3" vertical="end" style="border: 1px solid black; padding: 1rem;">Grid items can be used to layout a page using a 12 column grid.</grid-item>
    </grid-container>
  </div>
  ```
</docs>
