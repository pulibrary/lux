<template>
<div class="gallery">
  <card v-for="(item, index) in galleryItems" :key="item.id" class="galleryCard" size="medium">
    <media-image :src="item.mediaUrl" height="medium"></media-image>
    <heading level="h2">{{ item.title }}</heading>
    <text-style variation="default">{{ item.caption }}</text-style>
  </card>
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/*
 * Gallery is a grid of images with captions.
 */
export default {
  name: "Gallery",
  status: "review",
  release: "1.0.0",
  type: "Pattern",
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
     * Gallery items to be displayed in the gallery.
     */
    galleryItems: {
      required: true,
      type: Array,
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
.gallery {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: auto;
  height: calc(100% - 40px);
  border-radius: 4px;
  margin-bottom: 40px;
  clear: both;

  .card {
    margin: 1rem;
  }
}

.img_gallery[data-v-8452714c] {
  overflow: auto;
  height: calc(100% - 40px);
}
</style>
<docs>
```js
    <gallery :galleryItems='[
      {"id":"8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","title":"example.tif","caption":"FileSet : 8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","mediaUrl":"https://picsum.photos/600/300/?random"},
      {"id":"8f0a0908-317f-414e-a78a-c38a4a3b28e3","title":"example.tif","caption":"FileSet : 8f0a0908-317f-414e-a78a-c38a4a3b28e3","mediaUrl":"https://picsum.photos/600/300/?random"},
      {"id":"ea01019e-f644-4416-b99c-1b44bf49d060","title":"example.tif","caption":"FileSet : ea01019e-f644-4416-b99c-1b44bf49d060","mediaUrl":"https://picsum.photos/600/300/?random"}
      ]'></gallery>
```
</docs>
