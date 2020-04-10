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
     * A collection identifier for the requestable item
     * For Finding Aids, this is the `CollectionID`
     */
    referencenumber: {
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
     * ItemInfo4 in Atlas Systems Aeon
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
     * The physical location of the item, typically the repository, such as `mss`
     * Found in physloc[type='text']
     * ItemInfo4 in Atlas Systems Aeon
     */
    physloc: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The delivery location of the item, typically the location of the Reading Room
     * Found in physloc[type="code"] of EAD
     */
    location: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The item subtitle
     */
    subtitle: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * The item date
     */
    itemdate: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * The itemnumber
     */
    itemnumber: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * The item volume
     */
    itemvolume: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * A note detailing any access restrictions that pertain to the item
     * ItemInfo1 in Atlas Systems Aeon
     */
    accessnote: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * This refers to how many containers, subcontainers, and/or linear feet of
     * material of the item
     * ItemInfo2 in Atlas Systems Aeon
     */
    extent: {
      type: String,
      default: "",
      required: false,
    },
    /**
     * The URL of the item
     * ItemInfo5 in Atlas Systems Aeon
     */
    itemurl: {
      type: String,
      default: "",
      required: false,
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
    <add-to-cart-button callnumber="Foo" title="Catch-22" location="mudd" referencenumber="MC044"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    physloc="rcpxm"
    :containers="[{ type: 'volume', value: '4' }]">
      Add Catch-22 to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Bar" title="The Hobbit" location="mudd" referencenumber="MC044"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    physloc="rcpxm"
    :containers="[{ type: 'box', value: '11' }, { type: 'box', value: '12' }]">
      Add The Hobbit to Cart</add-to-cart-button>
    <add-to-cart-button callnumber="Baz" title="High Fidelity" location="mudd" referencenumber="MC044"
    :unitid="{ type: 'barcode', value: '32101040795617' }"
    physloc="rcpxm"
    :subcontainers="[{ type: 'folder', value: '1' }, { type: 'folder', value: '2' }]"
    :containers="[{ type: 'box', value: '10' }]">
      Add High Fidelity to Cart</add-to-cart-button>
  </div>
  ```
</docs>
