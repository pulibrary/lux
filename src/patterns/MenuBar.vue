<template>
  <nav v-if="type === 'links'" class="lux-nav">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <template v-if="item.children">
          <a
            :key="index"
            :href="item.href"
            :title="item.name"
            class="lux-has-children lux-nav-item"
            aria-haspopup="true"
            @click="menuItemClicked($event, item)"
            >{{ item.name }}</a
          >
          <ul class="lux-nav-children" aria-label="submenu">
            <li v-for="{ href, name, index, target } in item.children" :key="index">
              <a
                :href="href"
                :title="name"
                :target="target"
                class="lux-nav-item"
                @click="menuItemClicked($event, item)"
                >{{ name }}</a
              >
            </li>
          </ul>
        </template>
        <template v-else>
          <a
            :href="item.href"
            :title="item.name"
            class="lux-nav-item"
            @click="menuItemClicked($event, item)"
            >{{ item.name }}</a
          >
        </template>
      </li>
    </ul>
  </nav>

  <div v-else-if="type === 'buttons'" class="lux-menu">
    <ul>
      <li v-for="(item, index) in menuItems" v-bind:key="item">
        <button
          :key="index"
          :href="item.href"
          :class="[
            'lux-menu-item',
            { 'lux-active': localActive === item.component },
            { 'lux-disabled': item.disabled },
            { 'lux-is-child': item.hasOwnProperty('parent') === true },
          ]"
          v-html="item.name"
          :disabled="item.disabled"
          @click="menuItemClicked($event, item)"
        ></button>
      </li>
    </ul>
  </div>

  <nav
    v-else-if="type === 'main-menu'"
    class="lux-main-menu"
    aria-label="Main Navigation"
    v-click-outside="hide"
  >
    <button
      aria-haspopup="true"
      aria-label="Main Menu"
      :aria-expanded="isVisible ? 'true' : 'false'"
      class="lux-main-menu-toggle"
      :class="{ 'is-active': isVisible }"
      @click="isVisible = !isVisible"
    >
      <hamburger></hamburger>
    </button>
    <ul class="lux-main-menu-list" :class="{ 'lux-show': isVisible }">
      <li
        role="presentation"
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ 'lux-has-children': item.children }"
      >
        <template v-if="item.children">
          <button
            aria-haspopup="true"
            :aria-expanded="activeItem ? 'true' : 'false'"
            class="lux-submenu-toggle"
            @click="setActiveItem(index)"
          >
            {{ item.name }}
          </button>
          <ul role="menu" :class="{ 'lux-show': index === activeItem }">
            <li role="presentation" v-for="(child, index) in item.children" :key="index">
              <a
                role="menuitem"
                :key="index"
                :href="child.href"
                :title="child.name"
                :target="child.target"
                :data-method="child.method"
                class="lux-nav-item"
                >{{ child.name }}</a
              >
            </li>
          </ul>
        </template>
        <template v-else>
          <a :key="index" :href="item.href" :title="item.name" class="lux-nav-item">
            {{ item.name }}
          </a>
        </template>
      </li>
    </ul>
  </nav>
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
  data: function() {
    return {
      isVisible: false,
      activeItem: "",
    }
  },
  props: {
    /**
     * The html element types used for the nav bar. Passing 'href' in menuItems
     * will only work if type = "links".
     * `links, buttons`
     */
    type: {
      type: String,
      default: "links",
      validator: value => {
        return value.match(/(links|buttons|main-menu)/)
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
     * Menu items are options to be displayed to the user. To mimic a Rails link_to helper for an item, simply pass the HTTP method with a `method` property.
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
    menuItemClicked(value) {
      this.$emit("menu-item-clicked", value)
    },
    setActiveItem(index) {
      if (this.activeItem === index) {
        this.activeItem = ""
      } else {
        this.activeItem = index
      }
    },
    hide: function(event) {
      this.isVisible = false
      this.activeItem = ""
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
// Design Tokens with local scope
$color-nav-link: $color-bleu-de-france;
$color-nav-link-active: $color-bleu-de-france;

.lux-nav {
  @include stack-space($space-base);
  font-family: $font-family-text;
  font-size: $font-size-small;
  line-height: $line-height-base;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    color: $color-nav-link;
    display: block;
    float: left;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;

    &:hover,
    &:focus-within {
      cursor: pointer;
    }

    &:hover > ul,
    &:focus-within > ul,
    & ul:hover,
    & ul:focus {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  a {
    color: $color-nav-link;
    padding: $space-x-small 0;
    margin: 0 $space-x-small;
    text-decoration: none;
    display: block;

    &:hover,
    &:focus {
      color: $color-nav-link-active;
    }

    &.lux-active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: $font-weight-bold;
      color: $color-nav-link;
    }

    &.lux-has-children {
      background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 52%, 0 0;
      background-size: 0.55em auto, 100%;
      padding-right: 23px;
    }
  }

  .lux-nav-children {
    visibility: hidden;
    opacity: 0;
    min-width: 100%;
    width: auto;
    position: absolute;
    margin-top: 0;
    left: 0;
    display: none;
    z-index: 999;

    li {
      clear: both;
      width: 100%;
    }
  }

  li:last-child .lux-nav-children {
    right: 0;
    left: initial;
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

.lux-main-menu {
  @include stack-space($space-base);
  font-family: $font-family-text;
  font-size: $font-size-small;
  line-height: $line-height-base;
  width: 100%;

  .lux-main-menu-toggle {
    text-align: center;
    padding: $space-x-small;
    background: transparent;
    border: 0;
  }

  a,
  .lux-submenu-toggle {
    font-family: $font-family-text;
    background-color: transparent;
    border: 0;
    line-height: 1;
    cursor: pointer;
    outline: none;
    padding: $space-small $space-x-small;
    padding-left: $space-small;
    font-size: $font-size-small;
    color: $color-rich-black;
    display: block;
    text-decoration: none;
    width: 100%;
    text-align: left;
    white-space: nowrap;

    @media #{$media-query-medium-max} {
      font-size: $font-size-base;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &[target="_blank"]:after {
      content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
      margin: 0px 3px 0px 5px;
    }
  }

  .lux-main-menu-list {
    display: none;
    @include reset;
    flex-wrap: wrap;

    @media #{$media-query-medium-max} {
      > li:first-child a {
        padding-top: $space-base;
      }

      li:last-child a:last-child {
        padding-bottom: $space-base;
      }

      .lux-has-children {
        .lux-submenu-toggle {
          padding-bottom: $space-xx-small;
        }
        li:first-child a {
          padding-top: $space-small;
        }

        &:last-child li:last-child a:last-child {
          padding-bottom: $space-base;
        }
      }
    }

    ul {
      @include reset;
    }

    li {
      list-style-type: none;
      flex-basis: 100%;
      @media #{$media-query-medium-max} {
        border-bottom: 1px solid $color-grayscale-light;
      }

      &.lux-has-children {
        @media #{$media-query-medium-max} {
          border-bottom: 0;
        }
      }
    }

    @media #{$media-query-medium-max} {
      &.lux-show {
        display: flex;
        position: absolute;
        top: 60px;
        right: 0;
        left: 0;
        background: white;
        z-index: 999;
      }
    }
  }

  @media #{$media-query-medium-max} {
    .lux-submenu-toggle {
      font-size: 0.85rem;
      color: $color-grayscale;
      text-transform: uppercase;
      font-weight: 700;

      + ul a {
        padding-left: $space-base * 1.5;
      }
    }
  }

  @media #{$media-query-large} {
    .lux-main-menu-toggle {
      display: none;
    }

    .lux-main-menu-list {
      display: inline-flex;
      position: static;
    }

    .lux-main-menu-list li {
      flex-basis: auto;
    }

    a,
    button {
      width: auto;
    }

    .lux-has-children {
      position: relative;
    }

    .lux-has-children ul {
      position: absolute;
      background: $color-white;
      margin-bottom: 20px;
      z-index: 100000;
      left: 0;
      top: 48px;
      box-shadow: $box-shadow-large;
      display: none;
      min-width: 100%;

      li {
        white-space: nowrap;

        &:last-child {
          border-bottom: 0;
        }
      }

      &.lux-show {
        display: block;
      }
    }

    .lux-submenu-toggle {
      background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 52%, 0 0;
      background-size: 0.55em auto, 100%;
      padding-right: 30px;
      color: $color-rich-black;

      + ul a {
        padding: 0.5rem 1rem;
        line-height: 1;

        &:first-child,
        &:last-child {
          padding-top: 0.75rem;
        }
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <menu-bar type="main-menu" active="Dashboard" :menu-items="[
    {name: 'Dashboard', component: 'Dashboard', href: '/example/'},
    {name: 'Posts', component: 'Posts', href: '/example/'},
    {name: 'Requests', component: 'Requests', href: '/example/', children: [
      {name: 'New Travel Request', component: 'New Travel Request', href: '/example/'},
      {name: 'New Leave Request', component: 'New Leave Request', href: '/example/'}
    ]},
    {name: 'Users', component: 'Users', href: '/example/', children: [
      {name: 'External Site', component: 'External Site', href: 'http://princeton.edu', target: '_blank'},
      {name: 'Settings', component: 'Settings', href: '/example/'},
      {name: 'Logout', component: 'Logout', href: '/example/'}
    ]}
  ]"/>
  ```
</docs>
