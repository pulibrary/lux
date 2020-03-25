<template>
  <transition name="slide">
    <div v-if="isVisible" :style="style" class="panel-wrap">
      <div class="panel">
        <table v-if="items.length" :class="['lux-data-table']">
          <caption>
            Request Cart
          </caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Call Number</th>
              <th colspan="2">Containers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in items"
              :id="item.callnumber"
              :key="item.callnumber"
              class="lux-cartItem"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.callnumber }}</td>
              <td>{{ item.containers }}</td>
              <td>
                <input-button
                  @button-clicked="removeFromCart(item)"
                  type="button"
                  variation="outline"
                >
                  Remove
                </input-button>
              </td>
            </tr>
          </tbody>
        </table>
        <heading v-else level="h3">Your cart is currently empty.</heading>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * CartDetail shows users what they have in their cart.
 */
import store from "../store"
import { mapState, mapGetters } from "vuex"

export default {
  name: "CartDetail",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    style() {
      return "top: " + this.top
    },
    items: {
      get() {
        return this.cart.items
      },
    },
    isVisible: {
      get() {
        return this.cart.isVisible
      },
      set() {
        store.commit("TOGGLE_VISIBILITY")
      },
    },
    ...mapState({
      cart: state => store.state.cart,
    }),
  },
  props: {
    /**
     * This is the offset from the top of the viewport. For example, if you would
     * like the Cart to slide open without obscuring the header, set `top` to the
     * height of the header.
     */
    top: {
      type: String,
      default: "0px",
      required: false,
    },
  },
  methods: {
    removeFromCart(item) {
      store.dispatch("removeItemFromCart", item)
    },
  },
}
</script>

<style lang="scss" scoped>
/* panel layout mechanics */
.panel-wrap {
  position: fixed;
  top: 0px;
  bottom: 0;
  right: 0;
  width: 38em;
  transform: translateX(0%);
  z-index: 1000; /* Stay on top */
}
.panel {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-text;
  line-height: $line-height-base;
  background: $color-white;
  box-shadow: $box-shadow-small;
  color: $color-rich-black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 1em;
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(0%);
  transition: 0.3s ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: 0.3s ease-out;
}
</style>

<docs>
  ```jsx
  <div>
    <add-to-cart-button callnumber="ABC" title="Moby Dick" :containers="[{ type: 'box', value: '1' }, { type: 'folder', value: '1' }]">Add Foo to Cart</add-to-cart-button>
    <cart-view-toggle></cart-view-toggle>
    <cart-detail top="190px"></cart-detail>
  </div>
  ```
</docs>
