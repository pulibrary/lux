<template>
  <wrapper class="bg">
    <div class="controls">
      <alert v-if="orderChanged" status="info">Page order has changed.</alert>
      <input-button @click="saveHandler" id="save_btn" variation="solid" size="medium" :disabled="isDisabled">
        Apply Changes
      </input-button>
      <a v-if="!hidden" :href="editLink" id="replace-file-button">Manage Page Files</a>
    </div>
    <heading v-if="selectedTotal === 1" level="h2">Zoom <small>on the selected item</small></heading>
    <div v-if="selectedTotal === 1" class="osd-wrapper">
      <div class="osd">
        <div class="viewport" :id="viewerId"></div>
      </div>
    </div>
  </wrapper>
</template>

<script>
import OpenSeadragon from "openseadragon"
import { mapState, mapGetters } from "vuex"
/**
 * This is the Fileset Form for the Order Manager in Figgy
 */
export default {
  name: "Controls",
  status: "Prototype",
  release: "1.0.0",
  type: "Pattern",
  metaInfo: {
    title: "OrderManager Controls",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      viewer: null,
      osdId: this.viewerId,
    }
  },
  computed: {
    ...mapState({
      resource: state => state.ordermanager.resource,
      gallery: state => state.gallery,
    }),
    editLink: function() {
      let link = ""
      if (!this.hidden) {
        link = "/catalog/parent/" + this.resource.id + "/" + this.gallery.selected[0].id
      }
      return link
    },
    isMultiVolume: function() {
      return this.resource.isMultiVolume
    },
    isDisabled: function() {
      if (this.$store.getters.stateChanged) {
        return false
      } else {
        return true
      }
    },
    orderChanged: function() {
      return this.$store.getters.orderChanged
    },
    payloadFileset: function() {
      let changed = this.gallery.items.filter(item => this.gallery.changeList.indexOf(item.id) !== -1)
      let payload = changed.map(file => {
        return { id: file.id, title: file.title, page_type: file.viewingHint }
      })
      return payload
    },
    payloadVolume: function() {
      var changed = this.gallery.items.filter(item => this.gallery.changeList.indexOf(item.id) !== -1)
      var payload = changed.map(file => {
        return { id: file.id, title: file.title }
      })
      return payload
    },
    resourceClassName: function() {
      return this.resource.resourceClassName
    },
    selectedTotal() {
      return this.gallery.selected.length
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
    viewerId: {
      type: String,
      default: "viewer",
    },
  },
  methods: {
    initOSD: function() {
      if (this.viewer) {
        this.viewer.destroy()
        this.viewer = null
      }
      this.viewer = OpenSeadragon({
        id: this.osdId,
        showNavigationControl: false,
        tileSources: [this.gallery.selected[0].service + "/info.json"],
      })
    },
    hidden: function() {
      if (this.selectedTotal != 1) {
        return true
      } else {
        return false
      }
    },
    saveHandler: function() {
      if (this.isMultiVolume) {
        this.saveMVW()
      } else {
        this.save()
      }
    },
    save: function() {
      let body = {
        resource: {},
        file_sets: this.payloadFileset,
      }
      body.resource[this.resourceClassName] = {
        member_ids: this.imageIdList,
        thumbnail_id: this.thumbnail,
        start_canvas: this.startPage,
        viewing_hint: this.viewingHint,
        viewing_direction: this.viewingDirection,
        id: this.id,
      }
      this.$store.dispatch("saveState", body)
    },
    saveMVW: function() {
      let body = {
        resource: {},
        volumes: this.payloadVolume,
      }
      body.resource[this.resourceClassName] = {
        member_ids: this.imageIdList,
        viewing_direction: this.viewingDirection,
        thumbnail_id: this.thumbnail,
        id: this.id,
      }
      this.$store.dispatch("saveState", body)
    },
  },
  updated: function() {
    if (this.selectedTotal === 1) {
      this.initOSD()
    }
  },
}
</script>

<style lang="scss" scoped>
small {
  font-size: 1rem;
  font-weight: 400;
}
#replace-file-button {
  padding: 1.5rem;
  display: inline-block;
}
.is-hidden {
  display: none;
}
.bg {
  background: #f9f9f9;
  margin-left: -30px;
  margin-right: -30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.osd {
  background: #fff;
  height: 100%;
  width: 100%;
}

.osd-wrapper {
  background: #fff;
  flex-basis: 40%;
  border-radius: 4px;
  border: 2px solid #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
  padding: 10px;
}

h3.osd-title {
  font-size: 18px;
}

.viewport {
  height: 100%;
  width: 100%;
}
</style>

<docs>
  ```jsx
  <controls></controls>
  ```
</docs>
