<template>
  <component :is="element" :class="['lux-dropdown-menu', size]" v-click-outside="hide">
    <input-button
      v-on:button-clicked="buttonClicked($event)"
      class="lux-dropdown-button"
      variation="dropdown"
      :size="size"
      >{{ buttonLabel }}</input-button
    >
    <menu-bar
      v-bind:class="{ 'lux-show': isVisible }"
      v-on:menu-item-clicked="menuItemClicked($event)"
      :type="type"
      active="All"
      :menu-items="menuItems"
    />
  </component>
</template>

<script>
/**
 * Dropdowns allows a user to select a value from a series of options. Note that a simple,
 * two-level hierarchy is possible by adding a `parent` property and setting its value
 * to the name of its parent. Note from the example that the order of the menuItem data
 * does not matter.
 * Please note that full closing tags are required.
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
     * `links, buttons`
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
     * Alignment of menu items (not currently working)
     * `left, right`
     */
    align: {
      type: String,
      default: "left",
      validator: value => {
        return value.match(/(left|right)/)
      },
    },
    /**
     * Sets the size of the dropdown menu area `small, medium, large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
  },
  methods: {
    hide: function(event) {
      this.isVisible = false
    },
    buttonClicked(value) {
      this.isVisible = !this.isVisible
      this.$emit("button-clicked", value)
    },
    menuItemClicked(value) {
      this.isVisible = false
      this.$emit("menu-item-clicked", value)
    },
  },
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener("click", handler)
      },

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-dropdown-menu {
  margin: 0 0.25rem 1rem;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: 1;
  color: tint($color-rich-black, 20%);
  position: relative;
  display: inline-block;
  top: 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  .lux-dropdown-button {
    @include inset-space($space-small);
    color: tint($color-rich-black, 20%);
    transition: all 0.2s ease;
    margin: 0;
    padding-right: 36px;

    &:hover,
    &[hover] {
      @include box-shadow-inputs-hover;
    }

    &.small {
      @include inset-space(12px);
      font-size: $font-size-small;
      padding-right: 30px;
    }

    &.medium {
      @include inset-space($space-small);
      font-size: $font-size-base;
      padding-right: 36px;
    }

    &.large {
      @include inset-space(18px);
      font-size: $font-size-large;
      padding-right: 50px;
    }
  }

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
  <dropdown-menu type="links" button-label="Select Options" :menu-items="[
    {name: 'Vegetable', component: 'Vegetable', disabled: true},
    {name: 'Fruit', component: 'Fruit'},
    {name: 'Apple', component: 'Apple', parent: 'Fruit'},
    {name: 'Lettuce', component: 'Lettuce', parent: 'Vegetable'},
    {name: 'Carrot', component: 'Carrot', parent: 'Vegetable'},
    {name: 'Pear', component: 'Pear', parent: 'Fruit'},
  ]"></dropdown-menu>
  ```
</docs>
