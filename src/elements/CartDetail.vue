<template>
  <transition name="slide">
    <div v-if="isVisible" :style="style" class="panel-wrap">
      <div v-if="items.length" class="panel">
        <input-button
          v-on:button-clicked="toggleCartView($event)"
          class="top-left"
          type="button"
          variation="text"
        >
          <lux-icon-base icon-name="denied">
            <lux-icon-denied></lux-icon-denied>
          </lux-icon-base>
        </input-button>
        <table :class="['lux-data-table']">
          <caption>
            Request Cart
            <lux-icon-base width="30" height="30" icon-name="Cart">
              <lux-icon-cart></lux-icon-cart>
            </lux-icon-base>
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
              <td>
                {{ displayContainers(item.containers) }}
                <br />
                <em v-if="item.subcontainers.length"
                  >[{{ displayContainers(item.subcontainers) }}]</em
                >
              </td>
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
        <div class="cart-actions">
          <div class="center">
            <input-button type="submit" variation="solid" block>
              {{ requestButtonText() }}
            </input-button>
          </div>
        </div>
      </div>
      <div v-else class="panel">
        <heading level="h3">Your cart is currently empty.</heading>
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
    displayContainers(containers) {
      let displayString = containers.map(function(container) {
        // capitalize each container type
        return (
          container.type.charAt(0).toUpperCase() + container.type.slice(1) + " " + container.value
        )
      })
      return displayString.join(", ")
    },
    requestButtonText() {
      let text = "Request " + this.items.length + " Item"
      if (this.items.length > 1) {
        text = text + "s"
      }
      return text
    },
    toggleCartView(event) {
      store.commit("TOGGLE_VISIBILITY")
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

.cart-actions {
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: $color-rich-black;
  color: $color-white;
  height: 80px;
  width: 100%;
}

.center {
  margin: auto;
  width: 80%;
  text-align: center;
  padding: 15px 0;
}

.top-left {
  position: absolute;
  left: -10px;
  top: 0px;
}

table {
  margin-top: 2em;
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
    <add-to-cart-button callnumber="ABC" title="Moby Dick" location="mudd" referencenumber="MC044"
      :unitid="{ type: 'barcode', value: '32101040795617' }"
      physloc="rcpxm"
      :subcontainers="[{ type: 'folder', value: '1' }, { type: 'folder', value: '2' }]"
      :containers="[{ type: 'box', value: '1' }, { type: 'box', value: '2' }]">
      Add Foo to Cart
    </add-to-cart-button>
    <cart-view-toggle></cart-view-toggle>
    <cart-detail top="190px"></cart-detail>
  </div>
  ```
</docs>
