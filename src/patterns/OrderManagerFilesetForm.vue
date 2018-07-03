<template>
  <div>
    <heading level="h2">Edit <small>the selected item</small></heading>
    <form id="app" novalidate="true">
      <input-text @input="updateSingle()" id="itemLabel" :value="singleForm.label" label="Label" placeholder="e.g., example.tif" />
      <div class="form-group">
        <label class="control-label" for="pageType">Page Type</label>
        <select @change="updateSingle()" v-model="singleForm.viewingHint" id="pageType" class="form-control">
          <option value="single">Single Page (Default)</option>
          <option value="non-paged">Non-Paged</option>
          <option value="facing">Facing Pages</option>
        </select>
      </div>
      <label class="vertical">
        <input @change="updateStartCanvas()" v-model="isStartCanvas" id="isStartCanvas" type="checkbox" :value="startCanvas">
        Set as Start Page</a>
      </label>
      <label class="vertical">
        <input @change="updateThumbnail()" v-model="isThumbnail" id="isThumbnail" type="checkbox" :value="thumbnail">
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
  status: "Prototype",
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
    isStartCanvas() {
      let id = this.gallery.selected[0].id
      return this.resource.startCanvas === id
    },
    isThumbnail() {
      let id = this.gallery.selected[0].id
      return this.resource.thumbnail === id
    },
    singleForm() {
      return {
        label: this.gallery.selected[0].label,
        id: this.gallery.selected[0].id,
        viewingHint: this.gallery.selected[0].viewingHint,
      }
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
    updateStartCanvas() {
      var startCanvas = this.gallery.selected[0].id
      this.$store.commit("UPDATE_STARTCANVAS", startCanvas)
    },
    updateThumbnail() {
      let thumbnail = this.gallery.selected[0].id
      this.$store.commit("UPDATE_THUMBNAIL", thumbnail)
    },
    updateSingle() {
      console.log("update")
      //var changeList = this.$store.state.changeList
      //var images = this.$store.state.images
      // var index = this.$store.state.images.map(function (img) {
      //   return img.id
      // }).indexOf(this.$store.state.selected[0].id)
      // images[index] = this.singleForm

      // if (changeList.indexOf(this.$store.state.selected[0].id) === -1) {
      //   changeList.push(this.$store.state.selected[0].id)
      // }

      // this.$store.dispatch('updateChanges', changeList)
      // this.$store.dispatch('updateImages', images)
    },
    validate(field) {
      if (field.id == "email") {
        this.emailValue = field.value
        if (!field.value.length) {
          this.errormessageEmail = "You need to supply an email."
        } else {
          this.errormessageEmail = ""
        }
      }
      if (field.id == "pwd") {
        this.pwdValue = field.value
        if (!field.value.length) {
          this.errormessagePwd = "You need to supply a password."
        } else {
          this.errormessagePwd = ""
        }
      }
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
