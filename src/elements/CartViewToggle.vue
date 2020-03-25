<template>
  <div>
    <input-button
      v-on:button-clicked="toggleCartView($event)"
      type="button"
      variation="text"
      hideLabel
    >
      <lux-icon-base width="30" height="30" icon-name="Cart">
        <lux-icon-cart></lux-icon-cart>
      </lux-icon-base>
    </input-button>
    <span class="badge" id="count"> {{ cart.items.length }} </span>
  </div>
</template>

<script>
/**
 * AddToCartButton allows users to add items to a RequestCart
 */
import store from "../store"
import { mapState, mapGetters } from "vuex"

export default {
  name: "CartViewToggle",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    items: {
      get() {
        return this.cart.items
      },
    },
    ...mapState({
      cart: state => store.state.cart,
    }),
  },
  methods: {
    toggleCartView(event) {
      store.commit("TOGGLE_VISIBILITY")
    },
  },
}
</script>

<style lang="scss" scoped>
#count {
  font-size: 12px;
  font-family: $font-family-text;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: super;
  margin-left: -28px;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}
</style>

<docs>
  ```jsx
  <div>
    <cart-view-toggle></cart-view-toggle>
  </div>
  ```
</docs>
