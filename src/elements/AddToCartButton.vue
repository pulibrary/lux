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
      // set(value) {
      //   store.commit("UPDATE_ITEMS", value)
      // },
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
    /**
     * This is the unique library identifier for the requestable item
     */
    title: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * This is the unique library identifier for the requestable item
     */
    containers: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  methods: {
    addToCart() {
      store.dispatch("addItemToCart", {
        callnumber: this.callnumber,
        title: this.title,
        containers: this.containers[0].type + " " + this.containers[0].value,
      })
    },
  },
}
</script>

<style scoped></style>

<docs>
  ```jsx
  <div>
    <add-to-cart-button callnumber="Foo" title="Catch-22" :containers="[{ type: 'box', value: '1' }, { type: 'folder', value: '1' }]">Add Foo to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Bar" title="The Hobbit" :containers="[{ type: 'box', value: '1' }, { type: 'folder', value: '1' }]">Add Bar to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Baz" title="High Fidelity" :containers="[{ type: 'box', value: '1' }, { type: 'folder', value: '1' }]">Add Baz to Cart</add-to-cart-button>
  </div>
  ```
</docs>
