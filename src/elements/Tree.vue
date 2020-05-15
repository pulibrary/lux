<template>
  <ul class="lux-tree">
    <tree-item :id="collection.id" :json-data="collection" :selected="selected"> </tree-item>
  </ul>
</template>

<script>
import store from "../store"
import { mapState, mapGetters } from "vuex"
/**
 * Trees are used to display and navigate hierarchical data.
 */
export default {
  name: "Tree",
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
    selected: {
      default: null,
    },
    jsonData: {
      required: true,
    },
  },
  data: function() {
    return {
      isOpen: false,
      collection: this.jsonData,
    }
  },
  computed: {
    ...mapState({
      tree: state => store.state.tree,
    }),
  },
  beforeMount: function() {
    if (this.selected) {
      // if props are passed in select the appropriate node
      store.commit("SELECT", this.selected)
    }
  },
}
</script>

<style lang="scss" scoped>
.lux-tree.lux-button.icon.small {
  padding: 0px;
}
</style>

<docs>
  ```jsx
  <div>
    <tree
    selected="C0614_c00002"
    :json-data='{
      "id": "C0614",
      "level": "collection",
      "component_level": null,
      "components": [
        {
          "id": "C0614_c00001",
          "level": "Series",
          "component_level": 1,
          "reference": "C0614_c00001",
          "components": [
            {
              "id": "C0614_c00002",
              "level": "Subseries",
              "component_level": 2,
              "reference": "C0614_c00002",
              "components": [
                {
                  "id": "C0614_c00003",
                  "level": "File",
                  "component_level": 3,
                  "reference": "C0614_c00003",
                  "components": [],
                  "title": [
                    "General Writings 1"
                  ]
                },
                {
                  "id": "C0614_c00004",
                  "level": "File",
                  "component_level": 3,
                  "reference": "C0614_c00004",
                  "components": [],
                  "title": [
                    "General Writings 2"
                  ]
                }
              ],
              "title": [
                "Writings"
              ]
            }
          ],
          "title": [
            "Papers of Francis Preston Blair"
          ]
        }
      ],
      "title": [
        "Blair and Lee Family Papers"
      ]
    }'></tree>
  </div>
  ```

</docs>
