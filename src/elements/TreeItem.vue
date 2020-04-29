<template>
  <li @click="clicked">
    <span>{{ collection.title[0] }} {{ hasChildren ? (isOpen ? "[-]" : "[+]") : "" }}</span>
    <ul v-show="isOpen && hasChildren" @click="clicked">
      <tree-item
        v-for="(component, index) in collection.components"
        :json-data="component"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
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
  methods: {
    clicked: function() {
      console.log(this.jsonData)
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss"></style>

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
