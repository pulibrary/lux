<template>
  <draggable class="lux-gallery" v-model="items" tag="div" @click.native="deselect($event)">
    <card v-for="(item, index) in items"
      :id="item.id"
      :key="item.id"
      class="lux-galleryCard"
      :cardPixelWidth="cardPixelWidth"
      size="medium"
      :selected="isSelected(item)"
      :disabled="isDisabled(item)"
      :edited="hasChanged(item.id)"
      @card-click="select(item.id, $event)">
      <media-image :src="item.mediaUrl"></media-image>
      <heading level="h2">{{ item.title }}</heading>
      <text-style variation="default">{{ item.caption }}</text-style>
    </card>
  </draggable>
</template>

<script>
import store from "../store"
import { mapState, mapGetters } from "vuex"
import draggable from "vuedraggable"
/*
 * Gallery is a grid of images with captions.
 */
export default {
  name: "Gallery",
  status: "ready",
  release: "1.0.0",
  type: "Pattern",
  components: {
    draggable,
  },
  computed: {
    items: {
      get() {
        return this.gallery.items
      },
      set(value) {
        store.commit("SORT_ITEMS", value)
      },
    },
    ...mapState({
      gallery: state => store.state.gallery,
    }),
  },
  props: {
    /**
     * Gallery items to be displayed in the gallery.
     */
    galleryItems: {
      required: true,
      type: Array,
    },
    /**
     * Pixel width of the cards in the gallery.
     */
    cardPixelWidth: {
      required: false,
      default: 300,
    },
  },
  methods: {
    deselect: function(event) {
      if (event.target.className === "lux-gallery" || event.target.className === "lux-gallery lux-galleryWrapper") {
        this.selectNone()
      }
    },
    selectNone: function() {
      store.commit("SELECT", [])
    },
    getItemById: function(id) {
      var elementPos = this.getItemIndexById(id)
      return this.items[elementPos]
    },
    getItemIndexById: function(id) {
      return this.items
        .map(function(item) {
          return item.id
        })
        .indexOf(id)
    },
    hasChanged: function(id) {
      //console.log(this.gallery.changeList.indexOf(id) > -1)
      return this.gallery.changeList.indexOf(id) > -1
    },
    isDisabled: function(item) {
      return this.gallery.cut.indexOf(item) > -1
    },
    isSelected: function(item) {
      //console.log(this.gallery.selected.indexOf(item) > -1)
      return this.gallery.selected.indexOf(item) > -1
    },
    select: function(id, event) {
      if (!this.isDisabled(this.getItemById(id))) {
        // can't select disabled item
        let selected = []
        if (event.metaKey) {
          selected = this.gallery.selected
          selected.push(this.getItemById(event.target.id))
          store.commit("SELECT", selected)
        } else {
          if (this.gallery.selected.length === 1 && event.shiftKey) {
            var first = this.getItemIndexById(this.gallery.selected[0].id)
            var second = this.getItemIndexById(event.target.id)
            var min = Math.min(first, second)
            var max = Math.max(first, second)
            for (var i = min; i <= max; i++) {
              selected.push(this.items[i])
            }
            store.commit("SELECT", selected)
          } else {
            store.commit("SELECT", [this.getItemById(event.target.id)])
          }
        }
      }
    },
  },
  beforeMount: function() {
    if (this.galleryItems) {
      // if props are passed in set the cards on mount
      // window.app = this
      store.commit("SET_GALLERY", this.galleryItems)
    } else {
      // retrieve the data via an asyn action
    }
  },
  // This is calling a mutation in another module... may not be necessary
  // mounted() {
  //   if (!this.galleryItems) {
  //     this.$store.commit("CHANGE_RESOURCE_LOAD_STATE", "LOADING")
  //   }
  // },
}
</script>
<style lang="scss" scoped>
.lux-gallery {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;

  overflow: auto;
  height: calc(100% - 40px);
  border-radius: 4px;
  margin-bottom: 40px;
  clear: both;

  .lux-card {
    margin: 1rem;
    height: auto;
    overflow: hidden;
    white-space: wrap;

    .lux-media-image img {
      height: auto;
    }
  }
}
</style>
<docs>
```js
    <gallery :gallery-items='[
      {"id":"8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","title":"example.tif","caption":"FileSet : 8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","mediaUrl":"https://picsum.photos/600/300/?random"},
      {"id":"8f0a0908-317f-414e-a78a-c38a4a3b28e3","title":"example.tif","caption":"FileSet : 8f0a0908-317f-414e-a78a-c38a4a3b28e3","mediaUrl":"https://picsum.photos/600/300/?random"},
      {"id":"ea01019e-f644-4416-b99c-1b44bf49d060","title":"example.tif","caption":"FileSet : ea01019e-f644-4416-b99c-1b44bf49d060","mediaUrl":"https://picsum.photos/600/300/?random"}
      ]'></gallery>
```
</docs>
