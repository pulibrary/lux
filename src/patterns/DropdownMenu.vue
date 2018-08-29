<template>
  <component :is="type" :class="['lux-dropdown-menu']">
    <slot name="button"></slot>
    <slot></slot>
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
  type: "Pattern",
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
.lux-dropdown-menu {
  @include reset;
  @include stack-space($space-small);
  margin: 0.25rem;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: 1;
  color: set-text-color($color-rich-black, $color-white);
  position: relative;
  display: inline-block;
  top: 0;

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

  .menu,
  .nav {
    opacity: 0;
    transition: all 0s ease-in-out 1s;
    visibility: hidden;
  }

  &:hover > .menu,
  &:focus > .menu,
  &:focus-within > .menu,
  &:hover > .nav,
  &:focus > .nav,
  &:focus-within > .nav,
  .menu:hover,
  .nav:hover {
    opacity: 1;
    z-index: 9999;
    transition-delay: 0s;
    visibility: visible;
  }

  /deep/ .nav {
    background: $color-white;
    box-shadow: $box-shadow-small;

    position: absolute;
    min-width: calc(100% - 1px);
    margin: 1px 0 0;
    z-index: 9999;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: block;
    }

    .nav-item {
      background: $color-white;
      border: 0;
      color: $color-rich-black;
      cursor: pointer;
      display: block;
      padding: 0.5rem 1rem;
      margin: 0;
      width: 100%;
      text-align: left;
      font-size: $font-size-small;

      &:hover,
      &:focus {
        color: $color-rich-black;
        background: $color-grayscale-lighter;
        transition: opacity 0.1s ease;
      }

      &:active {
        transform: scale(0.99);
      }
    }

    .disabled {
      color: $color-grayscale-dark;

      &:hover,
      &:focus {
        background: $color-white;
        cursor: not-allowed;
        outline: none;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <dropdown-menu>
    <input-button slot="button" variation="dropdown">Selection Options</input-button>
    <menu-bar type="menu" active="All" :menu-items="[
      {name: 'All', component: 'All'},
      {name: 'None', component: 'None'},
      {name: 'Alternate', component: 'Alternate', disabled: true},
      {name: 'Inverse', component: 'Inverse'}
    ]"/>
  </dropdown-menu>
  ```
</docs>
