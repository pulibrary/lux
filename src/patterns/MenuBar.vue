<template>
  <nav v-if="type === 'links'" class="lux-nav">
    <ul>
      <li v-for="(item, index) in menuItems">
        <a
          :key="index"
          :href="item.href"
          :class="[
            'lux-nav-item',
            {'lux-active': localActive === item.component}]"
          v-html="item.name"
          @click="menuItemClicked($event)">
        </a>
      </li>
    </ul>
  </nav>

  <div v-else-if="type === 'buttons'" class="lux-menu">
    <ul>
      <li v-for="(item, index) in menuItems">
        <button
          :key="index"
          :href="item.href"
          :class="[
            'lux-menu-item',
            {'lux-active': localActive === item.component},
            {'lux-disabled': item.disabled}]"
          v-html="item.name"
          :disabled="item.disabled"
          @click="menuItemClicked($event, item)">
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "MenuBar",
  status: "ready",
  release: "1.0.0",
  type: "Pattern",
  model: {
    prop: "active",
  },
  props: {
    /**
     * The html element types used for the nav bar.
     */
    type: {
      type: String,
      default: "links",
      validator: value => {
        return value.match(/(links|buttons)/)
      },
    },
    /**
     * State which tab is active when initiated (using name of the component).
     */
    active: {
      required: false,
      type: String,
    },
    /**
     * Menu items are options to be displayed to the user.
     */
    menuItems: {
      required: true,
      type: Array,
    },
  },
  computed: {
    localActive: {
      get() {
        return this.active
      },
      set(val) {
        this.$emit("input", val)
      },
    },
  },
  methods: {
    menuItemClicked(value, item) {
      this.$emit("menu-item-clicked", value)
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-nav-link: $color-bleu-de-france;
$color-nav-link-active: $color-bleu-de-france;

.lux-nav {
  @include stack-space($space-base);
  font-family: $font-family-text;
  font-size: $font-size-small;
  line-height: $line-height-base;
  color: $color-white;
  text-align: center;
  width: 100%;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    color: $color-nav-link;
    padding: $space-x-small 0;
    margin: 0 $space-x-small;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: $color-nav-link-active;
    }
    &.lux-active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: $font-weight-bold;
      color: $color-nav-link;
    }
  }
}

.lux-menu {
  background: $color-white;
  box-shadow: $box-shadow-small;

  position: absolute;
  min-width: calc(100% - 1px);
  margin: 1px 0 0;
  z-index: 999;
  transition: opacity 0.1s ease;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  .lux-menu-item {
    background: $color-white;
    border: 0;
    cursor: pointer;
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    font-size: $font-size-small;

    &:hover,
    &:focus {
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
</style>

<docs>
  ```jsx
  <menu-bar type="links" active="Dashboard" :menu-items="[
    {name: 'Dashboard', component: 'Dashboard', href: '/example/'},
    {name: 'Posts', component: 'Posts', href: '/example/'},
    {name: 'Users', component: 'Users', href: '/example/'},
    {name: 'Settings', component: 'Settings', href: '/example/'}
  ]"/>
  ```
</docs>
