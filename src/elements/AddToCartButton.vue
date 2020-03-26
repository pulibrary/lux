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
    item: function() {
      return {
        callnumber: this.callnumber,
        title: this.title,
        containers: this.containers,
        subcontainers: this.subcontainers,
        unitid: this.unitid,
        physloc: this.physloc,
      }
    },
    items: {
      get() {
        return this.cart.items
      },
    },
    ...mapState({
      cart: state => store.state.cart,
    }),
  },
  props: {
    /**
     * The unique library identifier for the requestable item
     * For Finding Aids, this is the `CollectionID_ComponentID`
     */
    callnumber: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The title of the item
     */
    title: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Requestable containers that are considered "retrieval units"
     */
    containers: {
      type: Array,
      default: () => [],
      required: false,
    },
    /**
     * Additional subcontainers that contain the content
     */
    subcontainers: {
      type: Array,
      default: () => [],
      required: false,
    },
    /**
     * The container identifier, often a barcode, but not always
     */
    unitid: {
      type: Object,
      default: () => {},
      required: true,
    },
    /**
     * The physical location of the item
     */
    physloc: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    addToCart() {
      store.dispatch("addItemToCart", this.item)
    },
  },
}
</script>

<style scoped></style>

<docs>
  ```jsx
  <div>
    <add-to-cart-button callnumber="Foo" title="Catch-22"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    :physloc="{ type: 'code', value: 'rcpxm' }"
    :containers="[{ type: 'volume', value: '4' }]">
      Add Catch-22 to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Bar" title="The Hobbit"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    :physloc="{ type: 'code', value: 'rcpxm' }"
    :containers="[{ type: 'box', value: '11' }, { type: 'box', value: '12' }]">
      Add The Hobbit to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Baz" title="High Fidelity"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    :physloc="{ type: 'code', value: 'rcpxm' }"
    :subcontainers="[{ type: 'folder', value: '1' }, { type: 'folder', value: '2' }]"
    :containers="[{ type: 'box', value: '10' }]">
      Add High Fidelity to Cart</add-to-cart-button>
  </div>
  ```
</docs>
