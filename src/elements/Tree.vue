<template>
  <ul>
    <tree-item id="foo" :json-data="collection"></tree-item>
  </ul>
</template>

<script>
/**
 * Trees are the wrapper of TreeItems.
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
  methods: {
    // clicked: function() {
    //   console.log(this.jsonData)
    //   this.isOpen = !this.isOpen
    // },
  },
}
</script>

<style lang="scss"></style>

<docs>
  ```jsx
  <div>
    <tree :json-data='{
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
