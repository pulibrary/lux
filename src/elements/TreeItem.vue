<template>
  <li @click="clicked" :class="[{ selected: isSelected }]">
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
      isSelected: false,
      collection: this.jsonData,
    }
  },
  methods: {
    clicked: function() {
      console.log(this.jsonData)
      this.isOpen = !this.isOpen
      this.isSelected = !this.isSelected
    },
  },
}
</script>

<style lang="scss">
li {
  list-style-type: none;
  font-family: sans-serif;
  border: 1px;
  margin: 10px 0 10px 10px;
}

li span {
  background: $color-grayscale-warm;
  width: 100%;
  display: block;
  padding: 0.5em 0.5em 0.5em 2em;
}

li.selected {
  background: $color-grayscale-warm-light;
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
