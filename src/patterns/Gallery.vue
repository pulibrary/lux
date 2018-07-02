<template>
<div class="gallery">
  <draggable v-model="items" tag="div">
    <card v-for="(item, index) in items"
      :id="item.id"
      :key="item.id"
      class="galleryCard"
      size="medium"
      :selected="isSelected(item)"
      :disabled="item.disabled"
      :edited="item.edited"
      @card-click="select($event)">
      <media-image :src="item.mediaUrl" height="medium"></media-image>
      <heading level="h2">{{ item.title }}</heading>
      <text-style variation="default">{{ item.caption }}</text-style>
    </card>
  </draggable>

  <!-- <card v-for="(item, index) in galleryItems"
    :id="item.id"
    :key="item.id"
    class="galleryCard"
    size="medium"
    :selected="isSelected(item)"
    :disabled="item.disabled"
    :edited="item.edited"
    @card-click="select($event)">
    <media-image :src="item.mediaUrl" height="medium"></media-image>
    <heading level="h2">{{ item.title }}</heading>
    <text-style variation="default">{{ item.caption }}</text-style>
  </card> -->
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import draggable from "vuedraggable"
/*
 * Gallery is a grid of images with captions.
 */
export default {
  name: "Gallery",
  status: "review",
  release: "1.0.0",
  type: "Pattern",
  components: {
    draggable,
  },
  computed: {
    items: {
      get() {
        return this.resource.items
      },
      set(value) {
        this.$store.commit("SORT_ITEMS", value)
      },
    },
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
  methods: {
    getItemById: function(id) {
      var elementPos = this.getItemIndexById(id)
      return this.galleryItems[elementPos]
    },
    getItemIndexById: function(id) {
      return this.galleryItems
        .map(function(item) {
          return item.id
        })
        .indexOf(id)
    },
    isSelected: function(item) {
      console.log(item)
      console.log(this.resource.selected)
      return this.resource.selected.indexOf(item) > -1
    },
    select: function(event) {
      let selected = []
      if (event.metaKey) {
        selected = this.resource.selected
        selected.push(this.getItemById(event.target.id))
        this.$store.commit("SELECT", selected)
      } else {
        if (this.resource.selected.length === 1 && event.shiftKey) {
          var first = this.getItemIndexById(this.resource.selected[0].id)
          var second = this.getItemIndexById(event.target.id)
          var min = Math.min(first, second)
          var max = Math.max(first, second)
          for (var i = min; i <= max; i++) {
            selected.push(this.galleryItems[i])
          }
          this.$store.commit("SELECT", selected)
        } else {
          this.$store.commit("SELECT", [this.getItemById(event.target.id)])
        }
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
