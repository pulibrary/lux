<template>
  <component :is="type" :class="['dropdown-menu']">
    <slot/>
  </component>
</template>

<script>
/**
 * Dropdowns allows a user to select a value from a series of options.
 */
export default {
  name: "DropdownMenu",
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
    /**
     * Style variation to give additional meaning.
     * `default, disabled, active`
     */
    align: {
      type: String,
      default: "left",
      validator: value => {
        return value.match(/(left|right)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  @include reset;
  @include stack-space($space-small);
  margin: 0.25rem;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: 1;
  color: set-text-color($color-rich-black, $color-white);
  position: relative;
  display: inline-block;

  .dropdown {
    position: relative;
    vertical-align: middle;
    line-height: 1;
    margin: 0;

    &:hover,
    &:focus {
      background: $color-grayscale-lighter;
    }
  }

  .menu {
    visibility: hidden;
    opacity: 0;
    display: none;
  }

  &:hover > .menu,
  &:focus > .menu,
  &:focus-within > .menu {
    visibility: visible;
    opacity: 1;
    display: block;
  }
}
</style>

<docs>
  ```jsx
  <dropdown-menu>
    <input-button variation="dropdown">Selection Options</input-button>
    <menu-bar type="menu" active="All" :menuItems="[
      {name: 'All', component: 'All'},
      {name: 'None', component: 'None'},
      {name: 'Alternate', component: 'Alternate', disabled: true},
      {name: 'Inverse', component: 'Inverse'}
    ]"/>
  </dropdown-menu>
  ```
</docs>
