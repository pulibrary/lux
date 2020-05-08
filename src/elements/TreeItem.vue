<template>
  <li>
    <div class="container">
      <div class="item">
        <input-button
          @button-clicked="toggled($event)"
          class="expand-collapse"
          type="button"
          variation="icon"
          size="small"
          :icon="expandCollapseIcon"
          block
        >
        </input-button>
      </div>
      <div
        @click.capture="select(collection.id, $event)"
        :class="['item-label', { selected: isSelected }]"
      >
        <label for="[{ collection.title[0] }]">
          {{ collection.title[0] }} {{ hasChildren ? (isOpen ? "[-]" : "[+]") : "" }}
        </label>
      </div>
    </div>
    <ul v-show="isOpen && hasChildren">
      <tree-item
        v-for="(component, index) in collection.components"
        :json-data="component"
        :id="component.id"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
import store from "../store"
import { mapState, mapGetters } from "vuex"
/**
 * TreeItems are the building blocks of hierarchical navigation.
 */
export default {
  name: "TreeItem",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * id identifies the node in the tree.
     */
    id: {
      default: "",
    },
    jsonData: {
      default: [],
      required: true,
    },
  },
  data: function() {
    return {
      hasChildren: this.jsonData.components.length > 0,
      isOpen: true,
      collection: this.jsonData,
    }
  },
  computed: {
    expandCollapseIcon: function() {
      if (this.isOpen) {
        return "arrow-down"
      }
      return "arrow-right"
    },
    isSelected: function() {
      if (this.tree.selected === this.id) {
        return true
      }
      return false
    },
    ...mapState({
      tree: state => store.state.tree,
    }),
  },
  methods: {
    select: function(id, event) {
      if (!this.isOpen) {
        this.isOpen = !this.isOpen
      }
      store.commit("SELECT", id)
    },
    toggled: function() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
ul.lux-tree li {
  list-style-type: none;
  font-family: sans-serif;
  margin: 8px 0px 8px 0px;
}

ul.lux-tree li div.item-label {
  background: $color-grayscale-warm;
  margin-left: 8px;
  width: 100%;
  display: block;
  padding: 0.5em 0.5em 0.5em 2em;
}

ul.lux-tree li div.item-label.selected {
  background: $color-grayscale-warm-light;
}

//
// li input {
//   width: 1em;
//   height: 1em;
//   position: absolute;
//   left: -0.5em;
//   top: 0;
//   opacity: 0;
//   cursor: pointer;
// }
// li input + ul {
//   height: 1em;
//   margin: -16px 0 0 -44px;
//   background: url("https://www.thecssninja.com/demo/css_tree/toggle-small-expand.png") no-repeat
//     40px 0;
// }
// li input + ul > li {
//   display: none;
//   margin-left: -14px !important;
//   padding-left: 1px;
// }
// li input:checked + ul {
//   height: auto;
//   margin: -21px 0 0 -44px;
//   padding: 25px 0 0 80px;
//   background: url("https://www.thecssninja.com/demo/css_tree/toggle-small.png") no-repeat 40px 5px;
// }
// li input:checked + ul > li {
//   display: block;
//   margin: 0 0 0.063em;
// }
// li input:checked + ul > li:first-child {
//   margin: 0 0 0.125em;
// }

ul.lux-tree .container {
  display: flex;
}

ul.lux-tree .item {
  background: $color-grayscale-warm;
  width: 36px; /* A fixed width as the default */
  flex: 1 auto;
}

ul.lux-tree .item-label {
  flex-grow: 1; /* Set the middle element to grow and stretch */
}

.expand-collapse {
  background: transparent;
}
</style>

<docs>
  ```jsx
  <div>
    <tree-item :json-data='
    {
      "id": "C0614",
      "level": "collection",
      "component_level": null,
      "components": [],
      "title": [
        "Blair and Lee Family Papers"
      ]
    }
    '></tree-item>
  </div>
  ```

</docs>
