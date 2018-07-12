<template>
  <component :is="type" :class="['toolbar']">
    <dropdown-menu>
      <input-button variation="dropdown">Selection Options</input-button>
      <menu-bar v-on:menu-item-clicked="menuSelection($event)" type="menu" active="All" :menuItems="[
        {name: 'All', component: 'All'},
        {name: 'None', component: 'None'},
        {name: 'Alternate', component: 'Alternate'},
        {name: 'Inverse', component: 'Inverse'}
      ]"/>
    </dropdown-menu>
    <dropdown-menu>
      <input-button variation="dropdown">With Selected...</input-button>
      <menu-bar v-on:menu-item-clicked="menuSelection($event)" type="menu" active="Cut" :menuItems="[
        {name: 'Cut', component: 'Cut', disabled: isCutDisabled()},
        {name: 'Paste Before', component: 'Paste Before', disabled: isPasteDisabled()},
        {name: 'Paste After', component: 'Paste After', disabled: isPasteDisabled()}
      ]"/>
    </dropdown-menu>
    <spacer></spacer>
    <div class="zoom-slider">
      <svg-icon name="pul-icon-picture-solid" fill="rgb(0,0,0)" width="12px" height="12px"></svg-icon>
      <label for="img_zoom">Image zoom</label>
      <input @input="resizeCards($event)" type="range" id="img_zoom" min="40" max="500" value="300">
      <svg-icon name="pul-icon-picture-solid" fill="rgb(0,0,0)" width="24px" height="24px"></svg-icon>
    </div>
  </component>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/**
 * Toolbars allows a user to select a value from a series of options.
 */
export default {
  name: "Toolbar",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
  },
  computed: {
    ...mapState({
      resource: state => state.ordermanager.resource,
      gallery: state => state.gallery,
    }),
    // selectedTotal() {
    //   return this.gallery.selected.length
    // },
    cut: {
      get() {
        return this.gallery.cut
      },
    },
  },
  methods: {
    cutSelected: function() {
      this.$store.commit("CUT", this.gallery.selected)
      this.selectNone()
    },
    getItemIndexById: function(id) {
      return this.gallery.items
        .map(function(item) {
          return item.id
        })
        .indexOf(id)
    },
    isCutDisabled: function() {
      return !!this.gallery.cut.length
    },
    isPasteDisabled: function() {
      return !(this.gallery.cut.length && this.gallery.selected.length)
    },
    paste: function(indexModifier) {
      let items = this.gallery.items
      items = items.filter(val => !this.gallery.cut.includes(val))
      let pasteAfterIndex =
        this.getItemIndexById(this.gallery.selected[this.gallery.selected.length - 1].id) + indexModifier
      items.splice(pasteAfterIndex, 0, ...this.gallery.cut)
      this.$store.commit("PASTE", items)
      this.resetCut()
      this.selectNone()
    },
    resetCut: function() {
      this.$store.commit("CUT", [])
    },
    resizeCards: function(event) {
      this.$emit("cards-resized", event)
    },
    menuSelection(value) {
      switch (value.target.innerText) {
        case "All":
          this.selectAll()
          break
        case "None":
          this.selectNone()
          break
        case "Alternate":
          this.selectAlternate()
          break
        case "Inverse":
          this.selectInverse()
          break
        case "Cut":
          this.cutSelected()
          break
        case "Paste Before":
          this.paste(-1)
          break
        case "Paste After":
          this.paste(1)
          break
      }
    },
    selectAll: function() {
      this.$store.commit("SELECT", this.gallery.items)
    },
    selectAlternate: function() {
      let selected = []
      let itemTotal = this.gallery.items.length
      for (let i = 0; i < itemTotal; i = i + 2) {
        selected.push(this.gallery.items[i])
      }
      this.$store.commit("SELECT", selected)
    },
    selectInverse: function() {
      let selected = []
      let itemTotal = this.gallery.items.length
      for (let i = 1; i < itemTotal; i = i + 2) {
        selected.push(this.gallery.items[i])
      }
      this.$store.commit("SELECT", selected)
    },
    selectNone: function() {
      this.$store.commit("SELECT", [])
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  @include reset;
  @include stack-space($space-small);
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: 1;

  background: $color-grayscale-lighter;
  height: $height-footer;

  align-items: center;
  display: flex;
  padding: 0 24px;
}

.zoom-slider {
  .svg-icon,
  input {
    vertical-align: middle;
    line-height: 1;
    margin: 0;
  }

  label {
    @include visually-hidden;
  }
}
</style>

<docs>
  ```jsx
  <toolbar></toolbar>
  ```
</docs>
