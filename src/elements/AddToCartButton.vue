<template>
  <div>
    <input-button @button-clicked="addToCart" variation="solid" size="small">
      <slot />
    </input-button>
  </div>
</template>

<script>
/**
 * AddToCartButton allows users to add items to a RequestCart
 */
import store from "../store"
import { mapState, mapGetters } from "vuex"

export default {
  name: "AddToCartButton",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    items: {
      get() {
        return this.cart.items
      },
      set(value) {
        store.commit("UPDATE_ITEMS", value)
      },
    },
    ...mapState({
      cart: state => store.state.cart,
    }),
  },
  props: {
    /**
     * This is the unique library identifier for the requestable item
     */
    callnumber: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    addToCart() {
      let items = this.items
      items.push(this.callnumber)
      store.commit("UPDATE_ITEMS", items)
    },
  },
}
</script>

<style scoped></style>

<docs>
  ```jsx
  <div>
    <add-to-cart-button callnumber="foo" variation="solid" size="small">Add Item to Cart</add-to-cart-button>
  </div>
  ```
</docs>
