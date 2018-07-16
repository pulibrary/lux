<template>
  <div>
    <heading level="h2">Edit <small>the selected item</small></heading>
    <form id="app" novalidate="true">
      <input-text v-model="title" id="itemLabel" label="Label" placeholder="e.g., example.tif" />
      <!-- <input-select v-model="viewingHint" label="Page Type" id="pageType"
        :options="[
          {label: 'Single Page (Default)', value: 'single'},
          {label: 'Non-paged', value: 'non-paged'},
          {label: 'Facing Pages', value: 'facing'}
        ]"></input-select> -->
      <div class="form-group">
        <label class="control-label" for="pageType">Page Type</label>
        <select v-model="viewingHint" id="pageType" class="form-control">
          <option value="single">Single Page (Default)</option>
          <option value="non-paged">Non-Paged</option>
          <option value="facing">Facing Pages</option>
        </select>
      </div>
      <label class="vertical">
        <input v-model="isStartCanvas" id="isStartCanvas" type="checkbox" :value="startCanvas">
        Set as Start Page</a>
      </label>
      <label class="vertical">
        <input v-model="isThumbnail" id="isThumbnail" type="checkbox" :value="thumbnail">
        Set as Resource Thumbnail</input>
      </label>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/**
 * This is the Fileset Form for the Order Manager in Figgy
 */
export default {
  name: "FilesetForm",
  status: "prototype",
  release: "1.0.0",
  type: "Pattern",
  metaInfo: {
    title: "Fileset Form",
    htmlAttrs: {
      lang: "en",
    },
  },
  computed: {
    ...mapState({
      resource: state => state.ordermanager.resource,
      gallery: state => state.gallery,
    }),
    memberViewHint: function() {
      let id = this.gallery.selected[0].id
      let selectedMember = resource.members.find(member => member.id === id)
      return selectedMember.viewingHint
    },
    startCanvas: function() {
      return this.resource.startCanvas
    },
    thumbnail: function() {
      return this.resource.thumbnail
    },
    isStartCanvas: {
      get() {
        let id = this.gallery.selected[0].id
        return this.resource.startCanvas === id
      },
      set() {
        let id = this.gallery.selected[0].id
        this.$store.commit("UPDATE_STARTCANVAS", id)
      },
    },
    isThumbnail: {
      get() {
        let id = this.gallery.selected[0].id
        return this.resource.thumbnail === id
      },
      set() {
        let id = this.gallery.selected[0].id
        this.$store.commit("UPDATE_THUMBNAIL", id)
      },
    },
    title: {
      get() {
        return this.gallery.selected[0].caption
      },
      set(value) {
        let selected = this.gallery.selected[0]
        selected.caption = value
        this.updateSingle(selected)
      },
    },
    viewingHint: {
      get() {
        return this.gallery.selected[0].viewingHint
      },
      set(value) {
        let selected = this.gallery.selected[0]
        selected.viewingHint = value
        this.updateSingle(selected)
      },
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
    // item: {
    //   type: Object,
    //   default: {},
    // },
  },
  methods: {
    updateSingle(selected) {
      console.log("update")
      let changeList = this.gallery.changeList
      let items = this.gallery.items
      let index = this.gallery.items
        .map(function(item) {
          return item.id
        })
        .indexOf(selected.id)
      items[index] = selected

      if (changeList.indexOf(selected.id) === -1) {
        changeList.push(selected.id)
      }

      this.$store.commit("UPDATE_CHANGES", changeList)
      this.$store.commit("UPDATE_ITEMS", items)
    },
  },
}
</script>

<style lang="scss" scoped>
small {
  font-size: 1rem;
  font-weight: 400;
}
.vertical {
  display: block;
}
</style>

<docs>
  ```jsx
  <fileset-form></fileset-form>
  ```
</docs>
