<template>
  <component :is="element" :class="['lux-dropdown-menu']">
    <input-button v-on:button-clicked="buttonClicked($event)" class="lux-dropdown-button" variation="dropdown">{{ buttonLabel }}</input-button>
    <menu-bar v-bind:class="{ 'lux-show': isVisible }" v-on:menu-item-clicked="menuItemClicked($event)" :type="type" active="All" :menu-items="menuItems"/>
  </component>
</template>

<script>
/**
 * Dropdowns allows a user to select a value from a series of options.
 */
export default {
  name: "DropdownMenu",
  status: "ready",
  release: "1.0.0",
  type: "Pattern",
  data: function() {
    return {
      isVisible: false,
    }
  },
  props: {
    /**
     * The html element name used for the container
     */
    element: {
      type: String,
      default: "div",
    },
    /**
     * The menu items in the dropdown
     */
    buttonLabel: {
      type: String,
      default: "Dropdown",
    },
    /**
     * Whether the dropdown includes links or buttons as menu items
     */
    type: {
      type: String,
      default: "buttons",
      validator: value => {
        return value.match(/(links|buttons)/)
      },
    },
    /**
     * The html element name used for the container
     */
    menuItems: {
      type: Array,
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
  methods: {
    buttonClicked(value) {
      this.isVisible = !this.isVisible
      this.$emit("button-clicked", value)
    },
    menuItemClicked(value) {
      this.isVisible = false
      this.$emit("menu-item-clicked", value)
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

  .lux-dropdown {
    position: relative;
    vertical-align: middle;
    line-height: 1;
    margin: 0;

    &:hover,
    &:focus {
      background: $color-grayscale-lighter;
    }
  }

  .lux-menu,
  .lux-nav {
    opacity: 0;
    visibility: hidden;
  }

  .lux-show {
    opacity: 1;
    z-index: 100000;
    visibility: visible;
  }

  /deep/ .lux-nav {
    background: $color-white;
    box-shadow: $box-shadow-small;

    position: absolute;
    min-width: calc(100% - 1px);
    margin: 1px 0 0;
    z-index: 100000;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: block;
    }

    .lux-nav-item {
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

    .lux-disabled {
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
  <dropdown-menu button-label="Select Options" :menu-items="[
    {name: 'All', component: 'All'},
    {name: 'None', component: 'None'},
    {name: 'Alternate', component: 'Alternate', disabled: true},
    {name: 'Inverse', component: 'Inverse'}
  ]"/>
  ```
</docs>
