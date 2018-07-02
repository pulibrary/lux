<template>
<div class="orderManager">
  <transition name="fade">
    <div v-if="loading" class="overlay">
      <loader size="medium"></loader>
    </div>
  </transition>
  <heading level="h2">{{resource.label}} <small v-if="isMultiVolume">Multi-volume</small></heading>
  <wrapper class="galleryPanel" type="div">
    <gallery :galleryItems="resource.items"></gallery>
  </wrapper>
  <wrapper class="sidePanel" type="div" :fullWidth="false">
    <resource-form></resource-form>
  </wrapper>
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/**
 * OrderManager is a tool for reordering thumbnails that represent members of a complex object (a book, CD, multi-volume work, etc.).
 * Complex patterns like OrderManager come with their own Vuex store that it needs to manage state.
 * The easiest way to use the OrderManager is to simply pass a resource in as a prop.
 * You can see how this is done in the live code example at the end of this section.
 *
 * However you will still need to load the corresponding
 * Vuex module, *resourceModule*. Please see [the state management documentation](/#!/State%20Management) for how to manage state in complex patterns.
 */
export default {
  name: "OrderManager",
  status: "review",
  release: "1.0.0",
  type: "Element",
  computed: {
    isMultiVolume() {
      return this.$store.getters.isMultiVolume
    },
    ...mapState({
      resource: state => state.ordermanager.resource,
    }),
    loading: function() {
      return this.resource.loadState !== "LOADED" ? true : false
    },
  },
  props: {
    /**
     * The resource object in json format. Example: [todo]
     */
    resourceObject: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.resourceObject) {
      // if props are passed in set the resource on mount
      this.$store.commit("SET_RESOURCE", this.resourceObject)
    } else {
      this.$store.commit("CHANGE_RESOURCE_LOAD_STATE", "LOADING")
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}
.orderManager {
  position: relative;
  height: 80vh;
}
.sidePanel {
  position: absolute;
  top: 20px;
  right: 10px;
  height: 95%;
  width: 28.5%;
  border: 1px solid #ddd;
  border-radius: 4px;

  padding: 0 30px 0 30px;
  // height: 100%;
  overflow-y: scroll;
}
.galleryPanel {
  position: absolute;
  top: 20px;
  left: 0;
  height: 95%;
  width: 70%;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
<docs>
<br/>Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <order-manager :resource-object='{
      "id": "aea40813-e0ed-4307-aae9-aec53b26bdda",
      "label": "Resource with 3 files",
      "viewingHint": "individuals",
      "__typename": "ScannedResource",
      "members": [
        {
          "id": "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
          "label": "a",
          "viewingHint": null,
          "__typename": "FileSet"
        },
        {
          "id": "8f0a0908-317f-414e-a78a-c38a4a3b28e3",
          "label": "b",
          "viewingHint": null,
          "__typename": "FileSet"
        },
        {
          "id": "ea01019e-f644-4416-b99c-1b44bf49d060",
          "label": "c",
          "viewingHint": null,
          "__typename": "FileSet"
        }
      ]
    }'></order-manager>
```
</docs>
