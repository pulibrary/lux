<template>
  <component :is="type" :class="['toolbar']">
    <slot/>
  </component>
</template>

<script>
/**
 * Toolbars allows a user to select a value from a series of options.
 */
export default {
  name: "Toolbar",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  @include reset;
  @include stack-space($space-small);
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: 1;

  background: $color-grayscale-lighter;
  height: $height-footer;

  align-items: center;
  display: flex;
  padding: 0 24px;
}

.zoom-slider {
  .svg-icon,
  input {
    vertical-align: middle;
    line-height: 1;
    margin: 0;
  }

  label {
    @include visually-hidden;
  }
}
</style>

<docs>
  ```jsx
  <toolbar>
    <dropdown-menu>
      <input-button variation="dropdown">Selection Options</input-button>
      <menu-bar type="menu" active="All" :menuItems="[
        {name: 'All', component: 'All'},
        {name: 'None', component: 'None'},
        {name: 'Alternate', component: 'Alternate'},
        {name: 'Inverse', component: 'Inverse'}
      ]"/>
    </dropdown-menu>
    <dropdown-menu>
      <input-button variation="dropdown">With Selected...</input-button>
      <menu-bar type="menu" active="Cut" :menuItems="[
        {name: 'Cut', component: 'Cut'},
        {name: 'Paste Before', component: 'Paste Before', disabled: true},
        {name: 'Paste After', component: 'Paste After', disabled: true}
      ]"/>
    </dropdown-menu>
    <spacer></spacer>
    <div class="zoom-slider">
      <svg-icon name="pul-icon-picture-solid" fill="rgb(0,0,0)" width="12px"></svg-icon>
      <label for="img_zoom">Image zoom</label>
      <input type="range" id="img_zoom">
      <svg-icon name="pul-icon-picture-solid" fill="rgb(0,0,0)" width="24px"></svg-icon>
    </div>
  </toolbar>
  ```
</docs>
