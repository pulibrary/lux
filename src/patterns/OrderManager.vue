<template>
<div class="orderManager">
  <transition name="fade">
    <div v-if="loading" class="overlay">
      <loader size="medium"></loader>
    </div>
  </transition>
  <wrapper class="galleryPanel" type="div">
    <toolbar v-on:cards-resized="resizeCards($event)"></toolbar>
    <gallery class="galleryWrapper" :cardPixelWidth="cardPixelWidth" :galleryItems="galleryItems"></gallery>
  </wrapper>
  <wrapper class="sidePanel" type="div" :fullWidth="false">
    <!-- Resource Form-->
    <resource-form v-if="selectedTotal === 0"></resource-form>
    <!-- Multiple Selected Form-->
    <filesets-form v-if="selectedTotal > 1"></filesets-form>
    <!-- Single Selected Form-->
    <fileset-form v-if="selectedTotal === 1"></fileset-form>
    <controls viewerId="viewer"></controls>
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
  type: "Pattern",
  data: function() {
    return {
      cardPixelWidth: 300,
      captionPixelPadding: 9,
    }
  },
  computed: {
    galleryItems() {
      return this.resource.members.map(member => ({
        id: member.id,
        // title: member.label,
        caption: member.label, // member.__typename + " : " + member.id,
        mediaUrl:
          typeof member.thumbnail.iiifServiceUrl != "undefined"
            ? member.thumbnail.iiifServiceUrl + "/full/300,/0/default.jpg"
            : "https://picsum.photos/600/300/?random",
        viewingHint: member.viewingHint,
      }))
    },
    selectedTotal() {
      return this.gallery.selected.length
    },
    isMultiVolume() {
      return this.$store.getters.isMultiVolume
    },
    ...mapState({
      resource: state => state.ordermanager.resource,
      gallery: state => state.gallery,
    }),
    loading: function() {
      return this.resource.loadState !== "LOADED" ? true : false
    },
  },
  props: {
    /**
     * The resource object in json format.
     */
    resourceObject: {
      type: Object,
      default: null,
    },
    /**
     * The resource id. Requires host app to have async lookup of resource.
     */
    resourceId: {
      type: String,
      default: null,
    },
  },
  methods: {
    resizeCards: function(event) {
      this.cardPixelWidth = event.target.value
      if (this.cardPixelWidth < 75) {
        this.captionPixelPadding = 0
      } else {
        this.captionPixelPadding = 9
      }
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
.orderManager /deep/ .heading {
  margin: 12px 0 12px 0;
  line-height: 0.75;
  color: #001123;
}
.orderManager /deep/ h2 {
  letter-spacing: 0;
  font-size: 24px;
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
.galleryWrapper {
  overflow: auto;
  height: calc(100% - 80px);
  border-radius: 4px;
  margin-bottom: 80px;
  clear: both;
}
</style>
<docs>
<br/>Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <order-manager :resource-object='{
      "id": "aea40813-e0ed-4307-aae9-aec53b26bdda",
      "label": "Resource with 3 files",
      "viewingHint": "individuals",
      "viewingDirection": "LEFTTORIGHT",
      "startPage": "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
      "__typename": "ScannedResource",
      "members": [
        {
          "id": "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
          "label": "a",
          "viewingHint": null,
          "thumbnail": {
            "iiifServiceUrl": "https://libimages1.princeton.edu/loris/figgy_prod/f7%2F67%2Ffe%2Ff767fe4247524c5f96e16eba2ff93301%2Fintermediate_file.jp2"
          },
          "__typename": "FileSet"
        },
        {
          "id": "8f0a0908-317f-414e-a78a-c38a4a3b28e3",
          "label": "b",
          "viewingHint": null,
          "thumbnail": {
            "iiifServiceUrl": "https://libimages1.princeton.edu/loris/figgy_prod/a5%2F15%2F62%2Fa515627580594c978ce5352653c9442a%2Fintermediate_file.jp2"
          },
          "__typename": "FileSet"
        },
        {
          "id": "ea01019e-f644-4416-b99c-1b44bf49d060",
          "label": "c",
          "viewingHint": null,
          "thumbnail": {
            "iiifServiceUrl": "https://libimages1.princeton.edu/loris/figgy_prod/d9%2Fb5%2F8c%2Fd9b58c8f3e554706bec4d977b12cd4e4%2Fintermediate_file.jp2"
          },
          "__typename": "FileSet"
        }
      ]
    }'></order-manager>
```
</docs>
